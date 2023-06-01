import { useEffect, useRef, useState } from "react";
import { useTodosDispatch } from "../Providers/TodosProvider";

const TodoForm = (props) => {
  const dispatch = useTodosDispatch();

  const [todo, setTodo] = useState("");
  const [alert, setAlert] = useState("");

  const todoText = useRef(null);

  useEffect(() => todoText.current.focus(), []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      setAlert("Please enter the text of your ToDo first!");
      return;
    }

    setAlert("");
    setTodo("");
    dispatch({type: 'add', todo: todo});
  };

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex justify-between gap-3">
        <input
          type="text"
          className="w-9/12 border-2 hover:border-blue-200 focus:border-blue-400 transition rounded-md px-3 py-2 outline-none"
          placeholder="Enter work todo"
          value={todo}
          ref={todoText}
          onChange={changeHandler}
        ></input>
        <button className="w-3/12 bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-md">
          Add ToDo
        </button>
      </div>
      {alert && (
        <div className="text-xs text-red-600 mt-2 animate-bounce">{alert}</div>
      )}
    </form>
  );
};

export default TodoForm;
