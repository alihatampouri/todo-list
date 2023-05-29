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

  const completeHandler = (id) => {
    // find item index
    const index = todos.findIndex((todo) => todo.id === id);

    // clone item
    const item = { ...todos[index] };

    // change completed status
    item.isCompleted = !item.isCompleted;

    // clone todos for update
    const updatedTodos = [...todos];

    // replace item
    updatedTodos[index] = item;

    // update todos state
    setTodos(updatedTodos);
  };

  const editHandler = (id) => {
    console.log(id);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="px-80">
      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeHandler}
        onEdit={editHandler}
        onDelete={deleteHandler}
      />
    </div>
  );
};

export default Todo;
