import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LocalPersistenceService } from './local-persistence.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  todos: Todo[] = [];

  constructor(private persistence: LocalPersistenceService) {
    persistence.getAllTodos().then((todos) => (this.todos = todos));
  }

  async createTodo(title: string) {
    const todo = await this.persistence.createTodo(title);
    // this.todos = [...this.todos, todo];

    // Mutate for simplicity
    this.todos.push(todo);
  }

  async updateTodoTitle(id: Todo['id'], title: string) {
    const todo = await this.persistence.updateTodo(id, { title });
    // this.todos = this.todos.map((t) => (t.id === id ? todo : t));

    // Mutate for simplicity
    const todoToUpdate = this.todos.find((t) => t.id === id);
    todoToUpdate!.title = title;
  }

  async updateTodoCompletedState(id: Todo['id'], completed: boolean) {
    const todo = await this.persistence.updateTodo(id, { completed });
    // this.todos = this.todos.map((t) => (t.id === id ? todo : t));

    // Mutate for simplicity
    const todoToUpdate = this.todos.find((t) => t.id === id);
    todoToUpdate!.completed = completed;
  }

  async deleteTodo(id: Todo['id']) {
    await this.persistence.deleteTodo(id);
    // this.todos = this.todos.filter((t) => t.id !== id);

    // Mutate for simplicity
    const indexToDelete = this.todos.findIndex((t) => t.id === id);
    this.todos.splice(indexToDelete, 1);
  }

  async deleteCompletedTodos() {
    await Promise.all(
      this.todos.filter((t) => t.completed).map((t) => this.deleteTodo(t.id))
    );
  }

  async setAllTodosCompletedState(completed: boolean) {
    await Promise.all(
      this.todos
        .filter((t) => t.completed !== completed)
        .map((t) => this.updateTodoCompletedState(t.id, completed))
    );
  }
}
