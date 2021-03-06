import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { v4 as uuidv4 } from "uuid";

const Form = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({ id: null, completed: false, task: "" });
  const onChangeInput = (e) => {
    setTask({ id: uuidv4(), task: e.target.value, completed: false });
  };
  const onSubmit = (e) => {
    if (task.task !== "" && task.id !== null) {
      e.preventDefault();
      setTaskList([...taskList, task]);
      let allTasks = JSON.parse(localStorage.getItem("taskList")) || [];
      allTasks.push(task);
      localStorage.setItem('taskList', JSON.stringify(allTasks));      
      console.log(taskList);
      setTask({ completed: false, task: "" });
    }
    else {
      return;
    }
  };
  const allDoneTask = () => {
    const doneCount = taskList?.filter((task) => task.completed === true).length;
    if (doneCount === taskList.length) {
      const newTaskList = taskList.map((task) => ({ ...task, completed: false }));
      setTaskList(newTaskList);
    } else {
      const newTaskList = taskList.map((task) => ({ ...task, completed: true }));
      setTaskList(newTaskList);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <Checkbox onClick={allDoneTask} />
        <input
          onChange={onChangeInput}
          type="text"
          name="task"
          id={task.id}
          value={task.task}
          placeholder="Add New Task"
        />

        <button>Add Task</button>
      </form>
    </div>
  );
};

export default Form;
