// import taskReducer from "./ToDoListReducer";
// import { combineReducers, legacy_createStore as createStore } from "redux";

// const rootReducer = combineReducers({
//   toDoListTasks: taskReducer,
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./todoSlice";
const store = configureStore({
  reducer: {
    todoData: TodoSlice,
  },
});
export default store;
