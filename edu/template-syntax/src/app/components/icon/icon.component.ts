import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const iconNames = [
  'moon',
  'sun',
  'menu',
  'close',
  'computer',
  'avatar',
  'search',
  'check',
] as const;
type IconName = (typeof iconNames)[number];

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: '<svg><use attr.href="/assets/icons.svg#{{name}}" /></svg>',
  styles: `
    :host {
      display: flex;
      height: 1.5rem;
      width: 1.5rem;
      color: inherit;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true })
  name!: IconName;
}
