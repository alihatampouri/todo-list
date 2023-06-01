import { useTodos, useTodosDispatch } from "../Providers/TodosProvider";
import TodoItem from "./TodoItem";

const TodoList = ({ onComplete, onEdit, onDelete }) => {
  const todos = useTodos();
  const dispatch = useTodosDispatch();

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
        onComplete={() => dispatch({type: 'complete', id: todo.id})}
        onEdit={() => dispatch({type: 'edit', id: todo.id})}
        onDelete={() => dispatch({type: 'delete', id: todo.id})}
      />
    ));
  };

  return <section className="mt-4">{renderTodos()}</section>;
};

export default TodoList;
