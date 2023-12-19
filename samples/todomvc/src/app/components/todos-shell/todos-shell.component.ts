import { Component, inject } from '@angular/core';
import { TodosInputComponent } from '../todos-input/todos-input.component';
import { TodosMainComponent } from '../todos-main/todos-main.component';
import { TodosActionbarComponent } from '../todos-actionbar/todos-actionbar.component';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'todos-shell',
  standalone: true,
  templateUrl: './todos-shell.component.html',
  imports: [TodosInputComponent, TodosMainComponent, TodosActionbarComponent],
})
export class TodosShellComponent {
  private storeSvc = inject(StoreService);
  private filterSvc = inject(FilterService);
  private route = inject(ActivatedRoute);

  constructor() {
    this.route.paramMap
      .pipe(map((params) => params.get('filter')))
      .subscribe((filter) => {
        const visibilityFilter =
          filter === 'active' || filter === 'completed' ? filter : 'all';
        this.filterSvc.setFilter(visibilityFilter);
      });
  }

  handleCreate(title: string) {
    this.storeSvc.createTodo(title);
  }
}
