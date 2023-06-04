import { useEffect } from "react";
import {
  useFilter,
  useFilterStatus,
  useSetFilter,
  useTodos,
  useTodosDispatch,
} from "../Providers/TodosProvider";

const TodoFilter = (props) => {
  const todos = useTodos();
  const dispatch = useTodosDispatch();

  const filter = useFilter();
  const setFilter = useSetFilter();

  const filterStatus = useFilterStatus();

  useEffect(() => {
    dispatch({ type: "filter", filter: filter });
  }, [todos, dispatch, filter]);

  const filterChangeHandler = (e) => {
    const selectedType = e.target.value;
    setFilter(selectedType);
    dispatch({ type: "filter", filter: selectedType });
  };

  if (filterStatus) {
    return (
      <div className="flex justify-between my-4 px-3 py-2 border-2 rounded-md ">
        <span>filter todo</span>
        <select
          className="outline-none"
          value={filter}
          onChange={filterChangeHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    );
  }
};

export default TodoFilter;
