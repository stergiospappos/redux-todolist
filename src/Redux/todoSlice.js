import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addNewTodo: (state, action) => {
      state.tasks.push({ id: uuidv4(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload); // Assign the filtered array back to state.tasks
    },
  },
});

export const { addNewTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
