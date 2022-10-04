import * as React from "react";
import { FC } from "react";

type Prop = {
  title: string,
  id: number
  completed: boolean
}

export const Todo: FC<Prop> = ({ 
  title,
  id,
  completed
}) => {
  return (
    <div>
      <h3>
        { title }
      </h3>
      <input 
        type="checkbox"
      />
    </div>
  );
};