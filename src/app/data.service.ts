import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddTodoRequest } from "./store/models/AddTodoRequest";
import { CompleteTodoRequest } from "./store/models/CompleteTodoRequest";
import { Todo } from "./store/models/todo";

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

  public deleteTodo(id: number): Observable<number> {
    return this.http.delete<number>(`${this.BASE_URL}/todos/${id}`);
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
