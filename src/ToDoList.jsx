import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./Redux/actions";
import "./style.css";

function ToDoList() {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.toDoListTasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask(" ");
    }
  };
  console.log(tasks);
  return (
    <main class="container">
      <section class="todo-section">
        <div class="todo-container">
          <h1 class="todo-title">To Do List</h1>
          <div class="todo-input-container">
            <input
              type="text"
              class="todo-input"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add a new task"
            />
            <button class="todo-button" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
          <ul class="todo-list">
            {tasks?.map((t) => (
              <li class="todo-item" key={t.id}>
                <span class="todo-text">{t.text}</span>
                <button
                  class="todo-delete"
                  onClick={() => {
                    dispatch(deleteTask(t.id));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
export default ToDoList;
