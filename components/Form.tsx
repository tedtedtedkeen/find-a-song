import * as React from "react";
import { FC } from "react";
import { useTodos } from '../src/hooks/TodoProvider';
import { useInput } from '../src/hooks/useInput';

export const Form: FC = () => {

  const { addTodo } = useTodos();
  const [state, setState] = useInput("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addTodo(state.value);
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