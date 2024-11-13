import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./Redux/actions";

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
    <main>
      <section>
        <div>
          <h1>To Do List</h1>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={handleAddTask}>Add Task</button>
          <ul>
            {tasks?.map((t) => (
              <li key={t.id}>
                {t.text}
                <button
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
