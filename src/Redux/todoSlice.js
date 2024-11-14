import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addNewToDo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteToDo: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addNewToDo, deleteToDo } = TodoSlice.actions;
export default TodoSlice.reducer;
