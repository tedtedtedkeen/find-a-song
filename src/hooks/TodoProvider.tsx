import * as React from "react";
import { FC, ReactNode } from "react";
import { useState, useEffect, createContext, useContext } from "react";

const TodoContext = createContext<any>({} as any);
export const useTodos = () => useContext(TodoContext);

type Prop = {
  children: JSX.Element;
}

export function TodoProvider({ 
  children 
}: Prop): JSX.Element {

  const [todos, setTodos] = useState<{id: number, title: string, completed: boolean}[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(res => setTodos(res))
      .catch(err => err);
  }, [])

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        title,
        id: Math.floor(Math.random() * todos.length),
        completed: false,
      }
    ])
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      { children }
    </TodoContext.Provider>
  );
}