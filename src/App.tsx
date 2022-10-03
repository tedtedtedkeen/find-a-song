import { FC } from 'react';
import IMAGE from "../public/images/Typescript_logo_2020.svg.png";
import { Person } from "../components/Person";
import { Same } from "../components/Same";

export const App: FC = () => {

  const generateEmail = (user: {name: string}): string => {
    return `${user.name}@gmail.com`;
  }

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
      <Person 
        name="fedor"
        generateEmail={generateEmail}
      />
      <Same 
        name="haha"
      />
    </>
  );
};