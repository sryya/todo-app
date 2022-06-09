import { Checkbox, Button } from "@mui/material"

const ListItem = ({taskList, setTaskList, item}) => {
    const removeTask = (id) => {
        const newTasks = [...taskList.filter((task) => task.id !== id)]
        setTaskList(newTasks);
    }
    const checkTask = (id) => {
        const item = taskList.find(task => task.id === id)
        item.completed = !item.completed
        setTaskList(prevList => prevList.map((task) => task.id === id ? item: task))
        console.log(taskList)
    }
    
    
    
    return (
        <div key={item.id}><label >

        <Checkbox onClick={() => checkTask(item.id)} checked={item.completed}/>
        {item.task}

        <Button color='error' onClick={() => removeTask(item.id)}>x</Button>

    </label></div>
    )
    
}

export default ListItem;