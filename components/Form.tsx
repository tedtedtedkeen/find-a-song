import { FC } from "react";
import { useAppDispatch } from "../src/hook";
import { addTodo } from "../src/store/appSlice"
import { useInput } from '../src/hooks/useInput';

export const Form: FC = () => {

  const dispatch = useAppDispatch();
  const [state, setState] = useInput("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(addTodo(state.value));
    setState();
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        {...state}
      />
      <button>
        Send
      </button>
    </form>
  );
}