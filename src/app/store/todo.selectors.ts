import { createSelector } from "@ngrx/store";
import { Todo } from "./models/todo";
import { TodoState } from "./todo.state";

export const selectTodos = (state: TodoState) => state.todoList;

export const selectCompletedTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos.filter(todo => todo.complete)
);

export const selectUncompletedTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos.filter(todo => !todo.complete)
);
