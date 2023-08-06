import React from 'react'
import { TaskItem } from './TaskItem'
import { ITask } from '../models/ITask'

//Material UI
import List from '@mui/material/List';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

type Props = {
    tasks: ITask[],
    checkedTask: any
    deleteTask:any
}

export const TaskList: React.FC<Props> = ({ tasks, checkedTask, deleteTask }) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid xs={8} width='500px'>
                        <List>
                            {tasks.map((task) => (
                                <TaskItem key={task.id} task={task} checkedTask={checkedTask} deleteTask={deleteTask}/>
                            ))}
                        </List>
                        <Button color="success" 
                            startIcon={<CheckIcon />}
                            >
                            Tutto Fatto
                        </Button>
                        <Button color="error" 
                            startIcon={<DeleteIcon />}
                            >
                            Elimina tutti
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}