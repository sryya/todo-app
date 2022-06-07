import React from 'react';

function List({taskList,setTaskList}) {
    const removeTask=()=>{
    
        setTaskList((task) => task.filter((_, index) => index !== 0));
    }
    return (
        <div>
            
            <ul>
            <section>{taskList.map((item,index)=>{
        return (
            <div><label key={index}>
            <input type="checkbox" name="done" id="done" />
            {item.task}
            <button  onClick={removeTask}>X</button>
        </label></div>

        )
        })}</section>
           
            </ul>

        </div>
    );
}

export default List;
