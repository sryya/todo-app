import React from 'react';
import ListItem from './ListItem';

const List = ({ taskList, setTaskList, selectPage }) => {
    
    return (
        <div>

            <ul>
                <section>
                    {taskList.map((item, index) => {
                        if (selectPage === 'active' && item.completed === false) {
                            return (
                            
                                <ListItem taskList={taskList} setTaskList={setTaskList} item={item}/>
                            )
                        }
                        else if (selectPage === 'completed' && item.completed === true) {
                            return (
                        
                                <ListItem taskList={taskList} setTaskList={setTaskList} item={item}/>
                            )
                        }
                        else if (selectPage === 'all') {
                            return (
                                <ListItem taskList={taskList} setTaskList={setTaskList} item={item}/>
                            )
                        }
                        else {
                            return false;
                        }

                    })}
                </section>

            </ul>

        </div>
    );
}

export default List;
