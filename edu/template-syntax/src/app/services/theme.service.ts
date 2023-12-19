import { Injectable, effect, signal } from '@angular/core';

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
type Theme = 'light' | 'dark';

function updateTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<Theme>(darkModeQuery.matches ? 'dark' : 'light');

  toggleTheme() {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  constructor() {
    effect(() => {
      updateTheme(this.theme());
    });

    darkModeQuery.addEventListener('change', (ev) => {
      this.theme.set(ev.matches ? 'dark' : 'light');
    });
  }
}
