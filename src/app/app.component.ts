import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  VERSION
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./store/app.state";
import { AddTodoRequest } from "./store/models/AddTodoRequest";
import { Todo } from "./store/models/todo";
import { AddTodoAction, LoadTodoAction } from "./store/todo.action";
import {
  selectCompletedTodos,
  selectUncompletedTodos
} from "./store/todo.selectors";
import { TodoState } from "./store/todo.state";

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

  constructor(private store: Store<TodoState>) {}
  ngOnInit(): void {
    this.store.dispatch(new LoadTodoAction());
    this.store.subscribe(state => console.log(state));

    this.completedTodos$ = this.store.select(selectCompletedTodos);

    this.uncompletedTodos$ = this.store.select(selectUncompletedTodos);
  }

  public addTodo() {
    if (this.todoText.length > 0) {
      const addTodoRequest: AddTodoRequest = {
        complete: false,
        text: this.todoText
      };
      this.store.dispatch(new AddTodoAction(addTodoRequest));
      this.todoText = "";
    }
  }
}
