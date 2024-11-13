import taskReducer from "./ToDoListReducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({
  toDoListTasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;
