import { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
  };

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className="flex justify-between gap-3" onSubmit={submitHandler}>
      <input
        type="text"
        className="w-9/12 border-2 hover:border-blue-200 focus:border-blue-400 transition rounded-md px-3 py-2 outline-none"
        placeholder="Enter work todo"
        onChange={changeHandler}
      ></input>
      <button className="w-3/12 bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-md">
        Add ToDo
      </button>
    </form>
  );
};

export default TodoForm;
