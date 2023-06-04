import { createContext, useContext, useReducer, useState } from "react";
import random from "../../utils/random";

const todosContext = createContext();
const todosActions = createContext();

const TodosProvider = ({ children }) => {
  const [mainTodos, setMainTodos] = useState([]);

  const todoReducer = (todos, action) => {
    switch (action.type) {
      case "add": {
        const newTodos = [
          ...mainTodos,
          {
            id: random(1000, 9999),
            text: action.todo,
            isCompleted: false,
          },
        ];

        setMainTodos(newTodos);

        return newTodos;
      }

      case "edit": {
        // find item index
        const index = mainTodos.findIndex((todo) => todo.id === action.id);

        // clone todos for update
        const updatedTodos = [...mainTodos];

        // replace item
        updatedTodos[index] = action.item;

        setMainTodos(updatedTodos);

        // update todos state
        return updatedTodos;
      }

      case "delete": {
        const filteredTodos = mainTodos.filter((todo) => todo.id !== action.id);

        setMainTodos(filteredTodos);

        return filteredTodos;
      }

      case "complete": {
        // find item index
        const index = mainTodos.findIndex((todo) => todo.id === action.id);

        // clone item
        const item = { ...mainTodos[index] };

        // change completed status
        item.isCompleted = !item.isCompleted;

        // clone todos for update
        const updatedTodos = [...mainTodos];

        // replace item
        updatedTodos[index] = item;

        setMainTodos(updatedTodos);

        // update todos state
        return updatedTodos;
      }

      case "filter": {
        switch (action.filter) {
          case "all":
            return mainTodos;
          case "completed":
            return mainTodos.filter((todo) => todo.isCompleted);
          case "uncompleted":
            return mainTodos.filter((todo) => !todo.isCompleted);
        }
      }
    }
  };

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
