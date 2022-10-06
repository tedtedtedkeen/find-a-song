import * as React from "react";
import { FC } from "react";
import { useInput } from "../src/hooks/useInput";
import { useAppDispatch } from '../src/hook';
import { getName } from "../src/store/getNameSlice";

export const RenderTest: FC = () => {

  const dispatch = useAppDispatch()

  const [value, resetValue] = useInput("");

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getName(value.value));
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