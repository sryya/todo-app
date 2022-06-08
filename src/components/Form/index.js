import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ taskList, setTaskList }) => {
    const [task, setTask] = useState({ id: '',completed: false, task: '' });
    const onChangeInput = (e) => {
        setTask({ id: uuidv4(), task: e.target.value, completed: false });
    }
    const onSubmit = (e) => {

        if (task !== '') {
            e.preventDefault();
            setTaskList([...taskList, task]);
            console.log(taskList)
            setTask({ completed: false, task: '' });
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChangeInput}
                    type="text"
                    name="task"
                    id={task.id}
                    value={task.task}
                    placeholder='Add New Task' />

                <button >Add Task</button>
            </form>
        </div>
    );
}

export default Form;
