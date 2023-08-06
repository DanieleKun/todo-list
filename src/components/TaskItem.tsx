import React from 'react';
import { ITask } from '../models/ITask';
//Material UI
import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';

type Props = {
    task:ITask
    checkedTask:any
    deleteTask:any
}

export const TaskItem: React.FC<Props> = ({ task, checkedTask, deleteTask }) => {
    return (
        <>
            <ListItem>
                <ListItemButton style={{textDecoration: task.complete ? 'line-through' : undefined}}>
                    <ListItemIcon>
                        <FormControlLabel 
                        control={<Checkbox />} 
                        checked={task.complete}
                        onClick={() => (
                            checkedTask(task)
                        )}
                        label="" />
                    </ListItemIcon>
                    <ListItemText primary={task.text} />
                    <Button><DeleteIcon onClick={() => deleteTask(task.id)}/></Button>
                </ListItemButton>
            </ListItem>
        </>
    );
};