import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'todos-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-input.component.html',
})
export class TodosInputComponent {}
