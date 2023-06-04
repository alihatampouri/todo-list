import { useRef, useState } from "react";
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
  IoCreateOutline,
  IoCloseOutline,
  IoCheckmark,
} from "react-icons/io5";

const TodoItem = ({ todo, onComplete, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(null);
  const textInput = useRef(null);

  const editHandler = () => {
    if (!todo.isCompleted) {
      setEditing(todo);
      setTimeout(() => textInput.current.focus(), 5);
    }
  };

  const submitEditHandler = () => {
    // trigger onEdit props
    onEdit(editing);

    setEditing(null);
  };

  const cancelEditingHandler = () => {
    setEditing(null);
  };

  const changeHandler = (e) => {
    setEditing({ ...todo, text: e.target.value });
  };

  const keyDownHandler = (e) => {
    switch (e.keyCode) {
      case 13:
        submitEditHandler();
        break;
      case 27:
        cancelEditingHandler();
        break;
    }
  };

  return (
    <div
      className={
        "flex justify-between bg-gray-100 rounded-md p-3 transition-all" +
        (todo.isCompleted ? " line-through opacity-30" : "") +
        (editing ? " mt-2 mb-4 scale-105 shadow-xl" : " mb-2")
      }
    >
      <input
        type="text"
        value={editing ? editing.text : todo.text}
        className="bg-gray-100 outline-none w-8/12"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        disabled={!editing}
        ref={textInput}
      />
      {editing ? (
        <div className="flex gap-2 text-gray-500 overflow-hidden transition-all">
          <button
            className="opacity-60 hover:opacity-100 transition"
            onClick={submitEditHandler}
          >
            <IoCheckmark size="1.2em" />
          </button>
          <button
            className="opacity-60 hover:opacity-100 transition"
            onClick={cancelEditingHandler}
          >
            <IoCloseOutline size="1.2em" />
          </button>
        </div>
      ) : (
        <div className="flex gap-2 text-gray-500 overflow-hidden transition-all">
          <button
            className="opacity-60 hover:opacity-100 transition-all"
            onClick={onComplete}
          >
            {todo.isCompleted ? (
              <IoCheckmarkCircleSharp size="1.2em" />
            ) : (
              <IoCheckmarkCircleOutline size="1.2em" />
            )}
          </button>
          <button
            className="opacity-60 hover:opacity-100 transition-all"
            onClick={editHandler}
          >
            <IoCreateOutline size="1.2em" />
          </button>
          <button
            className="opacity-60 hover:opacity-100 transition-all"
            onClick={onDelete}
          >
            <IoCloseOutline size="1.2em" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
