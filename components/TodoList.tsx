import { FC } from "react";
import { useAppSelector } from "../src/hook";
import { Todo } from './Todo';

export const TodoList: FC = () => {

  const todos = useAppSelector(state => state.todos.list)

  if (!todos.length) return <div>We have no data</div>
  return(
    <>
      {
        todos.map((item) => {
          return <Todo 
            {...item}
            key={item.id}
          />
        })
      }
    </>
  ); 
}