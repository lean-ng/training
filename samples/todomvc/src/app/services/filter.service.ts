import { Injectable, signal } from '@angular/core';

type Visibility = 'all' | 'active' | 'completed';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private _filter = signal<Visibility>('all');
  filter = this._filter.asReadonly();

  setFilter(filter: Visibility) {
    this._filter.set(filter);
  }
}
