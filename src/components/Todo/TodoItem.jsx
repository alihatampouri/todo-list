import {
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
  IoCreateOutline,
  IoCloseOutline,
} from "react-icons/io5";

const TodoItem = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <div
      className={
        "flex justify-between bg-gray-100 rounded-md p-3 mb-2 transition-all" +
        (todo.isCompleted && " line-through opacity-30")
      }
    >
      <span>{todo.text}</span>
      <div className="flex gap-2 text-gray-500">
        <button
          className="hover:text-green-500 transition-all"
          onClick={onComplete}
        >
          {todo.isCompleted ? (
            <IoCheckmarkCircleSharp size="1.2em" />
          ) : (
            <IoCheckmarkCircleOutline size="1.2em" />
          )}
        </button>
        <button
          className="hover:text-yellow-500 transition-all"
          onClick={onEdit}
        >
          <IoCreateOutline size="1.2em" />
        </button>
        <button
          className="hover:text-red-500 transition-all"
          onClick={onDelete}
        >
          <IoCloseOutline size="1.2em" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
