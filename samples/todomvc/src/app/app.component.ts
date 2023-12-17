import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, TodosShellComponent],
})
export class AppComponent {}
