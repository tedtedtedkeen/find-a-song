import * as React from "react";
import { FC, useState } from "react";

export const VotEtoTochnoTest: FC = (): JSX.Element => {

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(c => c + 1);
  };

  const decrement = () => {
    setCount(c => c - 1)
  };

  return(
    <div>
      <h2>
        { count }
      </h2>
      <button
        onClick={increment}
      >
        +1
      </button>
      <button
        onClick={decrement}
      >
        -1
      </button>
    </div>
  );
};