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
      <div className="flex gap-2">
        <button onClick={onComplete}>
          {todo.isCompleted ? (
            <IoCheckmarkCircleSharp size="1.2em" />
          ) : (
            <IoCheckmarkCircleOutline size="1.2em" />
          )}
        </button>
        <button onClick={onEdit}>
          <IoCreateOutline size="1.2em" />
        </button>
        <button onClick={onDelete}>
          <IoCloseOutline size="1.2em" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
