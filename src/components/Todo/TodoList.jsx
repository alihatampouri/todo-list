import { useContext } from "react";
import TodoItem from "./TodoItem";
import { filteredTodos } from "../Providers/TodosProvider";

const TodoList = ({ onComplete, onEdit, onDelete }) => {
  const [todos, dispatch] = useContext(filteredTodos);

  const renderTodos = () => {
    if (todos.length === 0) {
      return (
        <div className="text-center text-gray-400 animate-pulse rounded-md p-3 mb-2">
          You haven't added anything to do yet
        </div>
      );
    }

    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onComplete={() => dispatch({ type: "complete", id: todo.id })}
        onEdit={(edited) =>
          dispatch({ type: "edit", id: todo.id, item: edited })
        }
        onDelete={() => dispatch({ type: "delete", id: todo.id })}
      />
    ));
  };

  return <section className="mt-4">{renderTodos()}</section>;
};

export default TodoList;
