import { Todo } from "./models/todo";
import { v4 as uuidv4 } from "uuid";

export interface TodoState {
  todoList: Todo[];
}

export const initialTodoState: TodoState = {
  todoList: []
};
