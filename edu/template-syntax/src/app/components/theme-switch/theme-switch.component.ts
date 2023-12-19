import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconComponent],
})
export class ThemeSwitchComponent {
  private themeSvc = inject(ThemeService);
  theme = this.themeSvc.theme;

  handleToggle() {
    this.themeSvc.toggleTheme();
  }
}
