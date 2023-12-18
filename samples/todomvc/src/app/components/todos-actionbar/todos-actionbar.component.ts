import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'todos-actionbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-actionbar.component.html',
})
export class TodosActionbarComponent {
  private storeSvc = inject(StoreService);
  todos = this.storeSvc.todos;

  activeCount = computed(() => this.todos().reduce((count, item) => item.completed ? count : count + 1, 0));
}
