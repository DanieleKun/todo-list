import React, { useState } from 'react'
import { ITask } from '../models/ITask'
import { TaskList } from '../components/TaskList'
import { TaskInput } from '../components/TaskInput'

const Tasks: ITask[] = [
    {
        id: 0,
        text: 'Spesa',
        complete: false
    },
    {
        id: 1,
        text: 'Passeggiata cane',
        complete: true
    }
]

export default function TodoContainer() {
    const [tasks, setTasks] = useState<ITask[]>(Tasks)

    const addTask = (task: string) : void => {
        const dataTask: ITask = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            text: task,
            complete: false
        }
        setTasks((newTask: ITask[]): ITask[] => [...newTask, dataTask])
    }

    const checkedTask = (selectedTask: ITask) => {
        const newTask = tasks.map((task) => {
            if (task === selectedTask) {
                return {
                    ...task,
                    complete: !task.complete
                }
            }
            return task
        })
        setTasks(newTask)
    }

    const deleteTask = (id: number): void => {
        const deleteTaskList: ITask[] = tasks.filter(
            (task: ITask): any => task.id !== id
        )
        setTasks(deleteTaskList)
    }

    return (
        <>
            <h1>Lista attività</h1>
            <TaskInput addTask={addTask}/>
            <TaskList tasks={tasks} checkedTask={checkedTask} deleteTask={deleteTask}/>
        </>
    )
}