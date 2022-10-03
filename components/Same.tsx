import * as React from "react";
import { useState, useEffect } from 'react';

interface Prop {
  name: string
};
// but here we don't say this is functional component
export const Same = ({name}: Prop) => {

  const [state, setState] = useState<{title: string, body: string, id: number}[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(con => setState(con))
  }, [state]);

  return (
    <>
      {
        state.map((item) => {
          return item.id < 15
            ? ( <div
                key={item.id}
              >
              <h3> {item.title} <span> {item.id} </span> </h3>
              <p> {item.body} </p>
            </div> )
            : null
        }) 
      }
    </>
  );
};