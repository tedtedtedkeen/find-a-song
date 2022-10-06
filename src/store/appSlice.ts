import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  list: Todo[];
  loading: boolean;
  error: string | null;
};

export const fetchTodos = createAsyncThunk<Todo[], void, { rejectValue: string }>(
  "todos/fetchTodos",
  async function(_, { rejectWithValue }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    if (!response.ok) {
      return rejectWithValue("Server error");
    }
    const data = await response.json();
    return data;
  }
)

const initialState: TodoState = {
  list: [],
  loading: false,
  error: null
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
  }
})

export const { addTodo, removeTodo, toggleTodoCompleted } = appSlice.actions;

export default appSlice.reducer;