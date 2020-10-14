import { Todo } from "./models/todo";
import { TodoAction, TodoActionTypes } from "./todo.action";
import { initialTodoState, TodoState } from "./todo.state";


export function TodoReducer(
  state: TodoState = initialTodoState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case TodoActionTypes.LOAD_TODO_SUCCESS:
      return {
        todoList: action.payload
      };
    case TodoActionTypes.LOAD_TODO_FAILURE: {
      console.log(action.payload); // we can handle errors here
      return state;
    }
    case TodoActionTypes.ADD_TODO: {
      // this should change right?
      const todo: Todo = {
        id: 1, // rest api's return ids as numbers 
        text: action.payload,
        complete: false
      };
      return {
        todoList: [...state.todoList, todo]
      };
    }
    case TodoActionTypes.DELETE_TODO: {
      // maybe we should only do this in a success response....
      return {
        todoList: [
          ...state.todoList.filter((todo: Todo) => todo.id !== action.payload) 
        ]
      };
    }
    case TodoActionTypes.COMPLETE_TODO: { 
      const todoList = [...state.todoList];
      const todoIndex = todoList.findIndex(
        (todo: Todo) => todo.id === action.payload
      );
      const todo = { ...todoList[todoIndex] };
      todo.complete = true;
      todoList[todoIndex] = todo;
      return {
        todoList
      };
    }
    default:
      return state;
  }
}
