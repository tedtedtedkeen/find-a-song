import * as React from "react";
import { FC } from "react";
import { useTodos } from '../src/hooks/TodoProvider';
import { Form } from './Form';
import { Todo } from './Todo';

export const TodoList: FC = () => {

  const { todos } = useTodos();

  return(
    <>
      <Form />
      {
        todos.map((item: { 
            id: number, title: string, completed: boolean
          }, index: number) => {
          return <Todo 
            {...item}
            key={item.id}
          />
        })
      }
    </>
  ); 
}