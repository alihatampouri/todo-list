import { createContext, useContext, useReducer, useState } from "react";
import random from "../../utils/random";

const mainContext = createContext();

const todosContext = createContext();
const todosActions = createContext();

const todoFilter = createContext();
const setTodoFilter = createContext();
const todoFilterStatus = createContext();
const setTodoFilterStatus = createContext();

const TodosProvider = ({ children }) => {
  const [mainTodos, setMainTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filterStatus, setFilterStatus] = useState(0);

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
    <mainContext.Provider value={mainTodos}>
      <todosContext.Provider value={todos}>
        <todosActions.Provider value={dispatch}>
          <todoFilter.Provider value={filter}>
            <setTodoFilter.Provider value={setFilter}>
              <todoFilterStatus.Provider value={filterStatus}>
                <setTodoFilterStatus.Provider value={setFilterStatus}>
                  {children}
                </setTodoFilterStatus.Provider>
              </todoFilterStatus.Provider>
            </setTodoFilter.Provider>
          </todoFilter.Provider>
        </todosActions.Provider>
      </todosContext.Provider>
    </mainContext.Provider>
  );
};

export default TodosProvider;

export const useMainTodos = () => useContext(mainContext);

export const useTodos = () => useContext(todosContext);
export const useTodosDispatch = () => useContext(todosActions);

export const useFilter = () => useContext(todoFilter);
export const useSetFilter = () => useContext(setTodoFilter);

export const useFilterStatus = () => useContext(todoFilterStatus);
export const useSetFilterStatus = () => useContext(setTodoFilterStatus);
