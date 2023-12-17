import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodosListComponent } from '../todos-list/todos-list.component';

@Component({
  selector: 'todos-main',
  standalone: true,
  templateUrl: './todos-main.component.html',
  imports: [CommonModule, TodosListComponent],
})
export class TodosMainComponent {}
