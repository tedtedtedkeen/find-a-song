import { FC, useEffect } from 'react';
import IMAGE from "../public/images/Typescript_logo_2020.svg.png";
import { TodoList } from '../components/TodoList';
import { RenderTest } from '../components/RenderTest';
import { VotEtoTochnoTest } from '../components/VotEtoTochnoTest';
import { Form } from '../components/Form';
import "./App.scss";
import { useAppDispatch } from './hook';
import { fetchTodos } from './store/appSlice';

export const App: FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

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
      <VotEtoTochnoTest />
      <RenderTest />
      <Form />
      <TodoList />
    </>
  );
};