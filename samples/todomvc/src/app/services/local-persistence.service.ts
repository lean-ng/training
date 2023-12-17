import { Injectable } from '@angular/core';
import { Persistence } from './persistence.interface';
import { Todo } from '../model/todo';

function loadTodos(): Todo[] {
  return JSON.parse(localStorage.getItem('todos') || '[]');
}

function saveTodos(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function generateId() {
  const nextId = JSON.parse(localStorage.getItem('nextId') || '1');
  localStorage.setItem('nextId', nextId + 1);
  return nextId;
}

@Injectable({
  providedIn: 'root',
})
export class LocalPersistenceService implements Persistence {
  async getAllTodos(): Promise<Todo[]> {
    return loadTodos();
  }

  async createTodo(title: string): Promise<Todo> {
    const todos = loadTodos();
    const createdTodo = {
      id: generateId(),
      title,
      completed: false,
    } satisfies Todo;
    saveTodos([...todos, createdTodo]);
    return createdTodo;
  }

  async updateTodo(
    id: number,
    changes: Partial<Omit<Todo, 'id'>>
  ): Promise<Todo> {
    const todos = loadTodos();
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      throw new Error(`Unknown todo with id ${id}`);
    }
    const updatedTodo = { ...todo, ...changes };
    saveTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    return updatedTodo;
  }

  async deleteTodo(id: number): Promise<void> {
    const todos = loadTodos();
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      throw new Error(`Unknown todo with id ${id}`);
    }
    saveTodos(todos.filter((t) => t.id !== id));
  }
}
