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
      console.log(action.payload); 
      return state;
    }
    case TodoActionTypes.ADD_TODO_SUCCESS: {
      console.log(action.payload);
      return {
        todoList: [...state.todoList, action.payload]
      };
    }
    case TodoActionTypes.ADD_TODO_FAILURE: {
      console.log(action.payload);
      return state;
    }
    case TodoActionTypes.DELETE_TODO_SUCCESS: {
      return {
        todoList: [
          ...state.todoList.filter((todo: Todo) => todo.id !== action.payload)
        ]
      };
    }

    case TodoActionTypes.DELETE_TODO_FAILURE: {
      console.log(action.payload.status);
      return state;
    }

    case TodoActionTypes.COMPLETE_TODO_SUCCESS:
      const todoList = [...state.todoList];
      const todoIndex = todoList.findIndex(
        (todo: Todo) => todo.id === action.payload.id
      );
      todoList[todoIndex] = action.payload;
      return {
        todoList
      };

    default:
      return state;
  }
}
