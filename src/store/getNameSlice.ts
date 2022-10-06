import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Name {
  name: string
};

const initialState: Name = {
  name: "",
}

const getNameSlice = createSlice({
  name: "mamuebal",
  initialState,
  reducers: {
    getName(state, action: PayloadAction<string>): void {
      state.name = action.payload;
      alert(state.name.toLocaleUpperCase());
    }
  }
});

export const { getName } = getNameSlice.actions;
export default getNameSlice.reducer;