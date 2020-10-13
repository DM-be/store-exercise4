import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./store/models/todo";

@Injectable()
export class DataService {
  private BASE_URL: string = "https://night-thread-uranium.glitch.me/";

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.BASE_URL}/todos`);
  }
}
