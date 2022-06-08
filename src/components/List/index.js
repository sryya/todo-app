import React from 'react';
import ListItem from './ListItem';

const List = ({ taskList, setTaskList, selectPage }) => {
    //const [checked, setChecked] = useState(false);


    // const removeTask = (id) => {
    //     const newTasks = [...taskList.filter((task) => task.id !== id)]
    //     setTaskList(newTasks);
    // }
    // const checkTask = (id) => {
    //     const item = taskList.find(task => task.id === id)
    //     item.completed = !item.completed
    //     setTaskList(prevList => prevList.map((task) => task.id === id ? item: task))
    //     console.log(taskList)
    // }
    return (
        <div>

            <ul>
                <section>
                    {taskList.map((item, index) => {
                        if (selectPage === 'active' && item.completed === false) {
                            return (
                                // <div key={item.id}><label >

                                //     <Checkbox onClick={() => checkTask(item.id)} checked={item.completed}/>
                                //     {item.task}

                                //     <Button color='error' onClick={() => removeTask(item.id)}>x</Button>

                                // </label></div>)
                                <ListItem taskList={taskList} setTaskList={setTaskList} item={item}/>
                            )
                        }
                        else if (selectPage === 'completed' && item.completed === true) {
                            return (
                                // <div key={item.id}><label >
                                //      <Checkbox onClick={() => checkTask(item.id)} checked={item.completed}/>
                                //     {item.task}

                                //     <Button color='error' onClick={() => removeTask(item.id)}>x</Button>
                                // </label></div>
                                <ListItem taskList={taskList} setTaskList={setTaskList} item={item}/>
                            )
                        }
                        else if (selectPage === 'all') {
                            return (
                                // <div key={item.id}><label >
                                //     <Checkbox onClick={() => checkTask(item.id)} checked={item.completed}/>
                                //     {item.task}

                                //     <Button color='error' onClick={() => removeTask(item.id)}>x</Button>
                                // </label></div>
                                <ListItem taskList={taskList} setTaskList={setTaskList} item={item}/>
                            )
                        }
                        else {
                            return <div key={item.id}></div>
                        }

                    })}
                </section>

            </ul>

        </div>
    );
}

export default List;
