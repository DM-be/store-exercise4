import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { Todo } from "./models/todo";

export enum TodoActionTypes {
  ADD_TODO = "[TODO] add todo",
  COMPLETE_TODO = "[TODO] completed todo",
  DELETE_TODO = "[TODO] delete todo",
  LOAD_TODO = "[TODO] load todos",
  LOAD_TODO_SUCCESS = "[TODO] load todos success",
  LOAD_TODO_FAILURE = "[TODO] load todos failure"
}

export class LoadTodoAction implements Action {
  readonly type = TodoActionTypes.LOAD_TODO;
}

export class LoadTodoActionSuccess implements Action {
  readonly type = TodoActionTypes.LOAD_TODO_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class LoadTodoActionFailure implements Action {
  readonly type = TodoActionTypes.LOAD_TODO_FAILURE;
  constructor(public payload: HttpErrorResponse) {}
}

export class AddTodoAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(public payload: string) {}
}

export class CompleteTodoAction implements Action {
  readonly type = TodoActionTypes.COMPLETE_TODO;
  constructor(public payload: string) {}
}

export class DeleteTodoAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;
  constructor(public payload: string) {}
}

export type TodoAction =
  | AddTodoAction
  | CompleteTodoAction
  | DeleteTodoAction
  | LoadTodoActionSuccess
  | LoadTodoActionFailure;
