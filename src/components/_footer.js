import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Footer({selectPage,setSelectPage}){
    return (
        <div>
            <Button> x left task</Button    >
            <span>
            
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={()=>{setSelectPage('all');
                console.log(selectPage);}}>All</Button>
                    <Button onClick={()=>{setSelectPage('active');
                console.log(selectPage);}}>Active</Button>
                    <Button onClick={()=>{setSelectPage('completed');
                console.log(selectPage);}}>Completed</Button>
                </ButtonGroup>
            
            </span>
            <Button>Clear completed</Button>
        </div>
    );
}

export default Footer;
