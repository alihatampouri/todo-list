import { createContext, useReducer, useState } from "react";
import random from "../../utils/random";

export const allTodos = createContext();

export const filteredTodos = createContext();

export const todoFilter = createContext();

export const todoFilterStatus = createContext();

const TodosProvider = ({ children }) => {
  const [mainTodos, setMainTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filterStatus, setFilterStatus] = useState(0);

  const todoReducer = (state, action) => {
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
    <allTodos.Provider value={[mainTodos, setMainTodos]}>
      <filteredTodos.Provider value={[todos, dispatch]}>
        <todoFilter.Provider value={[filter, setFilter]}>
          <todoFilterStatus.Provider value={[filterStatus, setFilterStatus]}>
            {children}
          </todoFilterStatus.Provider>
        </todoFilter.Provider>
      </filteredTodos.Provider>
    </allTodos.Provider>
  );
};

export default TodosProvider;
