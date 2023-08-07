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
    deleteTask: any
    deleteAllTasks: any
    checkAllTasks:any
}

export const TaskList: React.FC<Props> = ({ tasks, checkedTask, deleteTask, deleteAllTasks, checkAllTasks }) => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid xs={8} width='500px'>
                        {
                            tasks.length ?
                                <List>
                                    {tasks.map((task) => (
                                        <TaskItem key={task.id} task={task} checkedTask={checkedTask} deleteTask={deleteTask} deleteAllTasks={deleteAllTasks} />
                                    ))}
                                </List>
                                : <h2>Non hai nulla da fare</h2>
                        }

                        <Button onClick={() => checkAllTasks()} color="success"
                            startIcon={<CheckIcon />}
                        >
                            Tutto Fatto
                        </Button>
                        
                        <Button onClick={() => deleteAllTasks()} color="error"
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