import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Sample } from '../../types/sample';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input({ required: true })
  samples!: Sample[];

  @Output()
  select = new EventEmitter<number>();

  navItems: Array<{
    group: string;
    items: Array<{ title: string; index: number }>;
  }> = [];

  ngOnChanges() {
    this.navItems = [];
    let group = '';
    this.samples.forEach((sample, ix) => {
      if (group !== sample.group) {
        group = sample.group;
        this.navItems.push({ group, items: [] });
      }
      const currentGroup = this.navItems.at(-1);
      currentGroup?.items.push({ title: sample.title, index: ix });
    });
  }

  handleNavigation(selectedIndex: number) {
    this.select.emit(selectedIndex);
  }
}
