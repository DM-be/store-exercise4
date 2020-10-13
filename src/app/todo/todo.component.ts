import { ChangeDetectionStrategy, Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Todo } from '../store/models/todo';
import { CompleteTodoAction, DeleteTodoAction } from '../store/todo.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  completeTodo() {
    this.store.dispatch(new CompleteTodoAction(this.todo.id));
  }

  deleteTodo() {
    this.store.dispatch(new DeleteTodoAction(this.todo.id));
    
  }

}