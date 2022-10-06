import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export const fetchData = createAsyncThunk(
//   "todos/fetchData",
//   async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     return data;
//   }
// )

interface Todo {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
};

const initialState: TodoState = {
  list: [],
}

const appSlice = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      })
    },
    toggleTodoCompleted(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find(item => item.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
  },
  // extraReducers: {
  //   [fetchData.pending] : (state, action) => {},
  //   [fetchData.fulfilled] : (state, action) => {},
  //   [fetchData.rejected] : (state, action) => {},
  // }
})

export const { addTodo, removeTodo, toggleTodoCompleted } = appSlice.actions;

export default appSlice.reducer;