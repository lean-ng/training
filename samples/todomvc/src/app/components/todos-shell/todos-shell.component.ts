import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodosInputComponent } from '../todos-input/todos-input.component';
import { TodosMainComponent } from '../todos-main/todos-main.component';
import { TodosActionbarComponent } from '../todos-actionbar/todos-actionbar.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'todos-shell',
  standalone: true,
  templateUrl: './todos-shell.component.html',
  imports: [
    CommonModule,
    TodosInputComponent,
    TodosMainComponent,
    TodosActionbarComponent,
  ],
})
export class TodosShellComponent {
  private storeSvc = inject(StoreService);

  handleCreate(title: string) {
    this.storeSvc.createTodo(title);
  }
}
