import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { DataService } from "../data.service";
import { LoadTodoAction, LoadTodoActionFailure, LoadTodoActionSuccess, TodoActionTypes } from "./todo.action";
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

  constructor(private actions$: Actions, private dataService: DataService) {}
}
