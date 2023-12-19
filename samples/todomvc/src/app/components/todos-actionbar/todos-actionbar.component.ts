import { Component, computed, inject } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'todos-actionbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './todos-actionbar.component.html',
})
export class TodosActionbarComponent {
  private storeSvc = inject(StoreService);

  hasTodos = computed(() => this.storeSvc.todos().length > 0);
  activeCount = computed(() =>
    this.storeSvc
      .todos()
      .reduce((count, item) => (item.completed ? count : count + 1), 0)
  );
  hasCompleted = computed(() => this.storeSvc.todos().some((t) => t.completed));

  handleRemoveCompleted() {
    this.storeSvc.deleteCompletedTodos();
  }
}
