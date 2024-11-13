import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actionsTypes";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload }],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case EDIT_TASK:
      let { id, text } = action.payload;

      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (id == task.id) {
            return { ...task, text: text };
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};

export default taskReducer;
