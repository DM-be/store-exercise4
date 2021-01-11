import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { DataService } from "../data.service";
import {
  AddTodoAction,
  AddTodoFailureAction,
  AddTodoSuccessAction,
  CompleteTodoAction,
  CompleteTodoActionSuccess,
  DeleteTodoAction,
  DeleteTodoFailureAction,
  DeleteTodoSuccessAction,
  LoadTodoAction,
  LoadTodoActionFailure,
  LoadTodoActionSuccess,
  TodoActionTypes
} from "./todo.action";
@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadTodoAction>(TodoActionTypes.LOAD_TODO),
      mergeMap(() =>
        this.dataService.getTodos().pipe(
          map(todos => new LoadTodoActionSuccess(todos)),
          catchError(error => of(new LoadTodoActionFailure(error)))
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddTodoAction>(TodoActionTypes.ADD_TODO),
      mergeMap(addTodoAction =>
        this.dataService.addTodo(addTodoAction.payload).pipe(
          map(todo => new AddTodoSuccessAction(todo)),
          catchError(error => of(new AddTodoFailureAction(error)))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<DeleteTodoAction>(TodoActionTypes.DELETE_TODO),
      mergeMap(deleteTodoAction =>
        this.dataService.deleteTodo(deleteTodoAction.payload).pipe(
          map(() => new DeleteTodoSuccessAction(deleteTodoAction.payload)),
          catchError(error => of(new DeleteTodoFailureAction(error)))
        )
      )
    )
  );

  completeTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<CompleteTodoAction>(TodoActionTypes.COMPLETE_TODO),
      mergeMap(completeTodoAction =>
        this.dataService
          .completeTodo(completeTodoAction.payload, completeTodoAction.request)
          .pipe(
            map(todo => {
              return new CompleteTodoActionSuccess(todo);
            }),
            catchError(error => of(new DeleteTodoFailureAction(error)))
          )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
