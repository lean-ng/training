import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todos-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todos-item.component.html',
})
export class TodosItemComponent {
  editMode = false;
  editTitle = '';

  @Input({ required: true })
  todo!: Todo;

  @Output()
  toggle = new EventEmitter();

  @Output()
  destroy = new EventEmitter();

  @Output()
  updateTitle = new EventEmitter<string>();

  @ViewChild('editFld')
  editField!: ElementRef<HTMLInputElement>;

  beginEdit() {
    this.editTitle = this.todo.title;
    this.editMode = true;
    setTimeout(() => this.editField.nativeElement.focus(), 0);
  }

  cancelEdit() {
    this.editMode = false;
  }

  commitEdit() {
    if (this.editMode) {
      const title = this.editTitle.trim();

      if (title) {
        this.updateTitle.emit(title);
      } else {
        this.destroy.emit();
      }

      this.editMode = false;
    }
  }
}
