import { FC } from "react";
import { useAppDispatch } from "../src/hook";
import { toggleTodoCompleted, removeTodo } from "../src/store/appSlice"

interface Prop {
  title: string,
  id: string,
  completed: boolean,
}

export const Todo: FC<Prop> = ({ 
  title,
  id,
  completed,
}) => {

  const dispatch = useAppDispatch();

  return (
    <div>
      <h3
        className={completed ? "completed" : "classic"}
      >
        { title }
      </h3>
      <input 
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoCompleted(id))}
      />
      <button
        onClick={() => dispatch(removeTodo(id))}
      >
        Remove
      </button>
    </div>
  );
};