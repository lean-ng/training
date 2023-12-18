import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter([
    { path: '', component: TodosShellComponent },
    { path: ':filter', component: TodosShellComponent }
  ], withHashLocation())]
};
