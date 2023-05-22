import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className="px-80">
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList />
    </div>
  );
};

export default Todo;
