import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todoData: ToDoSlice,
  },
});

export default store;
