import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddTodoRequest } from "./models/AddTodoRequest";
import { CompleteTodoRequest } from "./models/CompleteTodoRequest";
import { Todo } from "./models/Todo";

@Injectable()
export class DataService {
  private BASE_URL: string = "https://night-thread-uranium.glitch.me/";

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URL}/todos`);
  }

  public addTodo(addTodoRequest: AddTodoRequest): Observable<Todo> {
    return this.http.post<Todo>(`${this.BASE_URL}/todos`, addTodoRequest);
  }

  public deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/todos/${id}`);
  }

  public completeTodo(
    id: number,
    completeTodoRequest: CompleteTodoRequest
  ): Observable<Todo> {
    return this.http.patch<Todo>(
      `${this.BASE_URL}/todos/${id}`,
      completeTodoRequest
    );
  }
}
