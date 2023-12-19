import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule, IconComponent, ThemeSwitchComponent, LogoComponent],
})
export class HeaderComponent {}
