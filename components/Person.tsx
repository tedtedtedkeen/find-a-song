import { FunctionComponent } from "react";

interface Props {
  name?: string,
  generateEmail?: (user: { name: string }) => string
}
// here we said "this is a functional component, bro"
export const Person: FunctionComponent<Props> = ({generateEmail, name}) => {

  console.log(generateEmail({name: "sitkovskywork"}));

  return (
    <>
      <h2>
        {name}
      </h2>
    </>
  );
};