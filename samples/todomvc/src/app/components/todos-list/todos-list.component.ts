import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { StoreService } from '../../services/store.service';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  imports: [CommonModule, TodosItemComponent],
})
export class TodosListComponent {
  private storeSvc = inject(StoreService);
  todos = this.storeSvc.todos;

  handleToggle(todo: Todo) {
    this.storeSvc.updateTodoCompletedState(todo.id, !todo.completed);
  }

  handleDestroy(todo: Todo) {
    this.storeSvc.deleteTodo(todo.id);
  }

  handleUpdate(todo: Todo, newTitle: string) {
    this.storeSvc.updateTodoTitle(todo.id, newTitle);
  }
}
