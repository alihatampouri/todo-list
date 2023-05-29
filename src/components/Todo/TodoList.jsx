import TodoItem from "./TodoItem";

const TodoList = ({ todos, onComplete, onEdit, onDelete }) => {
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
        onComplete={() => onComplete(todo.id)}
        onEdit={() => onEdit(todo.id)}
        onDelete={() => onDelete(todo.id)}
      />
    ));
  };

  return <section className="mt-4">{renderTodos()}</section>;
};

export default TodoList;
