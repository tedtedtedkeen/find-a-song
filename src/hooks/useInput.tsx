import { useState } from "react";

export const useInput: any = (initialValue: any) => {
  const [state, setState] = useState(initialValue);

  return [
    {
      value: state,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)
    },
    () => setState(initialValue)
  ]
}