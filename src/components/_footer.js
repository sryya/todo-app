import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Footer({ selectPage, setSelectPage, taskList ,setTaskList}) {
    const removeCompTask=()=>{
        const newList=[...taskList.filter(item => item.completed === false)];
        setTaskList(newList);
    }
    return (
        <div>
            <Button>{taskList.filter(item => item.completed === false).length} left task</Button >
            <span>

                <ButtonGroup variant="text" aria-label="text button group">
                    {selectPage === 'all' ? <Button variant='outlined' onClick={() => { setSelectPage('all'); }}>All</Button> : <Button onClick={() => { setSelectPage('all'); }}>All</Button>}
                    {selectPage === 'active' ? <Button variant='outlined'onClick={() => {setSelectPage('active');}}>Active</Button> : <Button onClick={() => {setSelectPage('active')}}>Active</Button>}
                    {selectPage === 'copmleted' ? <Button variant='outlined' onClick={() => {setSelectPage('completed'); }}>Completed</Button>: <Button onClick={() => {setSelectPage('completed') }}>Completed</Button>}
                    
                </ButtonGroup>

            </span>

            {taskList.filter(item => item.completed === true).length > 0 ? <Button onClick={removeCompTask}>Clear completed</Button> : false}

        </div>
    );
}

export default Footer;
