import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todos-input',
  standalone: true,
  imports: [],
  templateUrl: './todos-input.component.html',
})
export class TodosInputComponent {
  title = '';

  @Output()
  create = new EventEmitter<string>();

  handleEnter() {
    if (this.title.length > 0) {
      this.create.emit(this.title);
      this.title = '';
    }
  }
}
