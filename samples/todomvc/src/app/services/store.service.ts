import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo';
import { LocalPersistenceService } from './local-persistence.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _todos = signal<Todo[]>([]);
  todos = this._todos.asReadonly();

  constructor(private persistence: LocalPersistenceService) {
    persistence.getAllTodos().then((todos) => this._todos.set(todos));
  }

  async createTodo(title: string) {
    const todo = await this.persistence.createTodo(title);
    this._todos.update((todos) => [...todos, todo]);
  }

  async updateTodoTitle(id: Todo['id'], title: string) {
    const todo = await this.persistence.updateTodo(id, { title });
    this._todos.update((todos) => todos.map((t) => (t.id === id ? todo : t)));
  }

  async updateTodoCompletedState(id: Todo['id'], completed: boolean) {
    const todo = await this.persistence.updateTodo(id, { completed });
    this._todos.update((todos) => todos.map((t) => (t.id === id ? todo : t)));
  }

  async deleteTodo(id: Todo['id']) {
    await this.persistence.deleteTodo(id);
    this._todos.update((todos) => todos.filter((t) => t.id !== id));
  }

  async deleteCompletedTodos() {
    await Promise.all(
      this.todos()
        .filter((t) => t.completed)
        .map((t) => this.deleteTodo(t.id))
    );
  }

  async setAllTodosCompletedState(completed: boolean) {
    await Promise.all(
      this.todos()
        .filter((t) => t.completed !== completed)
        .map((t) => this.updateTodoCompletedState(t.id, completed))
    );
  }
}
