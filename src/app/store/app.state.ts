import { TodoState } from "./todo.state";


export interface AppState {
  readonly todoState: TodoState
}