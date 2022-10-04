import { FC } from 'react';
import IMAGE from "../public/images/Typescript_logo_2020.svg.png";
import { TodoList } from '../components/TodoList';

export const App: FC = () => {

  return (
    <>
      <h1>React TypeScript Wepback - {process.env.NODE_ENV} {process.env.name}</h1>
      <img 
        style={{
          width: 300
        }}
        src={IMAGE} 
        alt="image" 
      />
      <TodoList />
    </>
  );
};