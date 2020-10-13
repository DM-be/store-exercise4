import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  VERSION
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./store/app.state";
import { Todo } from "./store/models/todo";
import { AddTodoAction, LoadTodoAction } from "./store/todo.action";
import {
  selectCompletedTodos,
  selectUncompletedTodos
} from "./store/todo.selectors";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public completedTodos$: Observable<Todo[]>;
  public todos$: Observable<Todo[]>;
  public todoText: string;

  public uncompletedTodos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {

    this.store.dispatch(new LoadTodoAction())


    this.completedTodos$ = this.store.select(state =>
      selectCompletedTodos(state.todoState)
    );

    this.uncompletedTodos$ = this.store.select(state =>
      selectUncompletedTodos(state.todoState)
    );
  }

  public addTodo() {
    if (this.todoText.length > 0) {
      this.store.dispatch(new AddTodoAction(this.todoText));
      this.todoText = "";
    }
  }
}
