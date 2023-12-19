import { Component, computed, inject } from '@angular/core';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'todos-main',
  standalone: true,
  templateUrl: './todos-main.component.html',
  imports: [TodosListComponent],
})
export class TodosMainComponent {
  private storeSvc = inject(StoreService);

  hasTodos = computed(() => this.storeSvc.todos().length > 0);
  allDone = computed(() => !this.storeSvc.todos().some((t) => !t.completed));

  handleSyncState() {
    this.storeSvc.setAllTodosCompletedState(!this.allDone());
  }
}
