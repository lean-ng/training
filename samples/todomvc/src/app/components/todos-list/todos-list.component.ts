import { Component, computed, inject } from '@angular/core';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { StoreService } from '../../services/store.service';
import { Todo } from '../../model/todo';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'todos-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  imports: [TodosItemComponent],
})
export class TodosListComponent {
  private storeSvc = inject(StoreService);
  private filterSvc = inject(FilterService);

  todos = computed(() => {
    const filter = this.filterSvc.filter();
    return filter === 'all'
      ? this.storeSvc.todos()
      : this.storeSvc
          .todos()
          .filter((t) => t.completed === (filter === 'completed'));
  });

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
