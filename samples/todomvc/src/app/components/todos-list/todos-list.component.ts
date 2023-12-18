import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'todos-list',
  standalone: true,
  templateUrl: './todos-list.component.html',
  imports: [CommonModule, TodosItemComponent],
})
export class TodosListComponent {
  private storeSvc = inject(StoreService);
  todos = this.storeSvc.todos;
}
