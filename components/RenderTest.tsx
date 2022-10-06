import * as React from "react";
import { FC } from "react";
import { useInput } from "../src/hooks/useInput";
import { useTodos } from '../src/hooks/TodoProvider';

export const RenderTest: FC = () => {

  const { getName } = useTodos();

  const [value, resetValue] = useInput("");

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getName(value.value);
    resetValue();
  };

  return (
    <form
      onSubmit={handlerSubmit}
    >
      <input 
        type="text" 
        {...value}
      />
      <button>
        Get name
      </button>
    </form>
  );
};