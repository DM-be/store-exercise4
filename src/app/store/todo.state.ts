import { Todo } from "../models/Todo";


export interface TodoState {
  todoList: Todo[];
}

export const initialTodoState: TodoState = {
  todoList: []
};
