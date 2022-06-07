import {useState} from 'react';

function Form({taskList,setTaskList}){
    const [task,setTask]=useState({nstate:null,task:''});
    const onChangeInput=(e)=>{
        setTask({[e.target.name]:e.target.value});
        
    }
    const onSubmit=(e)=>{
    
        e.preventDefault();
       setTaskList([...taskList,{state:"false",task:task.task}]);
       setTask({state:null,task:''});
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                onChange={onChangeInput}
                type="text" 
                name="task" 
                id="task"
                value={task.task}
                placeholder='Add New Task' />
                
                <button >Add Task</button>
            </form>
        </div>
    );
}

export default Form;
