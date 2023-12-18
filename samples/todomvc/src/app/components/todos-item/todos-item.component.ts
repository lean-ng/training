import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-item.component.html',
})
export class TodosItemComponent {
  @Input({required: true})
  todo!: Todo;

  @Output()
  toggle = new EventEmitter();

  @Output()
  destroy = new EventEmitter();

}
