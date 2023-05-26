const TodoList = ({ todos }) => {
  return (
    <section className="mt-4">
      {todos.map((todo) => (
        <div className="bg-gray-100 rounded-md p-3 mb-2" key={todo.id}>
          {todo.text}
        </div>
      ))}
    </section>
  );
};

export default TodoList;
