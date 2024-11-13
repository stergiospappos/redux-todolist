import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actionsTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task.id,
});
