import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormEvent, useState } from 'react';

type Props = {
    addTask(task: string) : void
}

export const TaskInput: React.FC<Props> = ({addTask}) => {

    const [task, setTask] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('aggiunto');
        addTask(task)
        setTask('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField 
                label="Cosa fare?" 
                variant="standard" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
                <Button type='submit'>
                    Aggiungi
                </Button>
            </form>
        </>
    )
}