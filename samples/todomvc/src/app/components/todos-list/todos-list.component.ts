import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodosItemComponent } from '../todos-item/todos-item.component';

@Component({
  selector: 'todos-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  imports: [CommonModule, TodosItemComponent],
})
export class TodosListComponent {}
