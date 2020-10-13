import { HttpErrorResponse } from "@angular/common/http";
import { Action } from "@ngrx/store";
import { AddTodoRequest } from "./models/AddTodoRequest";
import { CompleteTodoRequest } from "./models/CompleteTodoRequest";
import { Todo } from "./models/todo";

// we will need more actions, each with success and failure
export enum TodoActionTypes {
  ADD_TODO = "[TODO] add todo",
  ADD_TODO_SUCCESS = "[TODO] add todo success",
  ADD_TODO_FAILURE = "[TODO] add todo failure",
  COMPLETE_TODO = "[TODO] complete todo",
  COMPLETE_TODO_SUCCESS = "[TODO] complete todo success",
  COMPLETE_TODO_FAILURE = "[TODO] complete todo failure",
  DELETE_TODO = "[TODO] delete todo",
  DELETE_TODO_SUCCESS = "[TODO] delete todo success",
  DELETE_TODO_FAILURE = "[TODO] delete todo failure",
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
  constructor(public payload: AddTodoRequest) {}
}

export class AddTodoSuccessAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO_SUCCESS;
  constructor(public payload: Todo) {}
}

export class AddTodoFailureAction implements Action {
  readonly type = TodoActionTypes.ADD_TODO_FAILURE;
  constructor(public payload: HttpErrorResponse) {}
}

export class CompleteTodoAction implements Action {
  readonly type = TodoActionTypes.COMPLETE_TODO;
  constructor(public payload: number, public request: CompleteTodoRequest) {}
}

export class CompleteTodoActionSuccess implements Action {
  readonly type = TodoActionTypes.COMPLETE_TODO_SUCCESS;
  constructor(public payload: number, public request: CompleteTodoRequest) {}
}

export class CompleteTodoActionFailure implements Action {
  readonly type = TodoActionTypes.COMPLETE_TODO_FAILURE;
    constructor(public payload: HttpErrorResponse) {}
}

export class DeleteTodoAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;
  constructor(public payload: number) {}
}

export class DeleteTodoSuccessAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteTodoFailureAction implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_FAILURE;
  constructor(public payload: HttpErrorResponse) {}
}

export type TodoAction =
  | AddTodoAction
  | CompleteTodoAction
  | CompleteTodoActionSuccess
  | CompleteTodoActionFailure
  | DeleteTodoAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailureAction
  | LoadTodoActionSuccess
  | LoadTodoActionFailure
  | AddTodoSuccessAction
  | AddTodoFailureAction

