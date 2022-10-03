import * as React from "react";
import { useState, ChangeEvent, useRef } from "react";

export enum Cities {
  Astana = "Is the capital",
  Shymkent = "Great too",
  Almaty = "In my heart"
}

interface Props {
  cities: object;
};

export const Text = ({cities}: Props) => {

  const [state, setState] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value);
  const handIncrement = () => setCount(c => c + 1);

  const takeEnum = (city: any, state: string) => city[state];

  return (
    <>
      <input 
        type="text"
        onChange={handlerChange} 
      />
      {
        takeEnum(cities, state)
      }
      <button
        onClick={() => takeEnum}
      >
        Take value
      </button>
      <button
        onClick={handIncrement}
      >
        Count {count}
      </button>
    </>
  );
};