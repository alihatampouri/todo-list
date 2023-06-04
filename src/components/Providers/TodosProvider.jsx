import { createContext, useContext, useReducer } from "react";
import random from "../../utils/random";

const todosContext = createContext();
const todosActions = createContext();

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "add": {
      return [
        ...todos,
        {
          id: random(1000,9999),
          text: action.todo,
          isCompleted: false,
        },
      ];
    }

    case "edit": {
      // find item index
      const index = todos.findIndex((todo) => todo.id === action.id);

      // clone todos for update
      const updatedTodos = [...todos];

      // replace item
      updatedTodos[index] = action.item;

      // update todos state
      return updatedTodos;
    }

    case "delete": {
      const filteredTodos = todos.filter((todo) => todo.id !== action.id);
      return filteredTodos;
    }

    case "complete": {
      // find item index
      const index = todos.findIndex((todo) => todo.id === action.id);

      // clone item
      const item = { ...todos[index] };

      // change completed status
      item.isCompleted = !item.isCompleted;

      // clone todos for update
      const updatedTodos = [...todos];

      // replace item
      updatedTodos[index] = item;

      // update todos state
      return updatedTodos;
    }
  }
};

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <todosContext.Provider value={todos}>
      <todosActions.Provider value={dispatch}>{children}</todosActions.Provider>
    </todosContext.Provider>
  );
};

export default TodosProvider;

export const useTodos = () => useContext(todosContext);
export const useTodosDispatch = () => useContext(todosActions);
