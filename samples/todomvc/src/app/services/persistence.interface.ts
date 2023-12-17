import { Todo } from '../model/todo';

export interface Persistence {
  getAllTodos(): Promise<Todo[]>;
  createTodo(title: string): Promise<Todo>;
  updateTodo(id: Todo['id'], changes: Partial<Omit<Todo, 'id'>>): Promise<Todo>;
  deleteTodo(id: Todo['id']): Promise<void>;
}
