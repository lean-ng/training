import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
}
