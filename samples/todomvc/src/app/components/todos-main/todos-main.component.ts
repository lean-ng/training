import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'todos-main',
  standalone: true,
  templateUrl: './todos-main.component.html',
  imports: [CommonModule, TodosListComponent],
})
export class TodosMainComponent {
  private storeSvc = inject(StoreService);
  todos = this.storeSvc.todos;

  allDone = computed(() => !this.todos().some(t => !t.completed));

  handleSyncState() {
    this.storeSvc.setAllTodosCompletedState(!this.allDone())
  }
}
