import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import getNameSliceReducer from "./getNameSlice";

const store = configureStore({
  reducer: {
    todos: appReducer,
    getName: getNameSliceReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;