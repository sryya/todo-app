import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Footer(){
    return (
        <div>
            <span> x left task</span>
            <span><ul>
            
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button>All</Button>
                    <Button>Active</Button>
                    <Button>Completed</Button>
                </ButtonGroup>
            </ul></span>
            <span>Clear completed</span>
        </div>
    );
}

export default Footer;
