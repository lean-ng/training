import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'todos-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-item.component.html',
})
export class TodosItemComponent {}
