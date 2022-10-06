import * as React from "react";
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
      .then((res) => res.map((item: any) => {
        item.id <= 3
          ? setTodos(prev => [...prev, item])
          : null
      }) )
      .catch(err => err);
  }, [])

  const addTodo = (title: string) => {
    if (title.trim().length) {
      setTodos([
        ...todos,
        {
          title,
          id: Math.floor(Math.random() * todos.length),
          completed: false,
        }
      ])
    }
  };

  const toggleTodoCompleted = (id: number) =>{
    setTodos(todos.map(item => {
      if (item.id !== id) return item;
      console.log(item.completed);
      return {
        ...item,
        completed: !item.completed
      };
    }))
  };
  
  const removeTodo = (id: number) => {
    return setTodos(prev => prev.filter(item => item.id !== id));
  };

  const getName = (name: string): void => {
    alert(name.toUpperCase());
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, getName, toggleTodoCompleted, removeTodo }}>
      { children }
    </TodoContext.Provider>
  );
}