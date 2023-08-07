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

    const addTask = (task: string) => {
        const dataTask: ITask = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            text: task,
            complete: false
        }
        setTasks((newTask: ITask[]) => [...newTask, dataTask])
        console.log(dataTask);
        
    }

    const checkedTask = (selectedTask: ITask) => {
        const checkTask = tasks.map((task:ITask) => {
            if (task === selectedTask) {
                return { ...task, complete: !task.complete }
            }
            return task
        })
        setTasks(checkTask)
    }

    const checkAllTasks = (tasksCheck:ITask) => {
        const checkedAll = tasks.map((tasks:ITask) => {
            return { ...tasks, complete: true}
        })
        setTasks(checkedAll)
    }

    const deleteTask = (id: number) => {
        const deleteTaskList: ITask[] = tasks.filter(
            (task: ITask) => task.id !== id
        )
        setTasks(deleteTaskList)
    }

    const deleteAllTasks = (tasks:ITask) => {
        setTasks([])
    }

    return (
        <>
            <h1>Lista attività</h1>
            <TaskInput addTask={addTask}/>
            <TaskList tasks={tasks} checkedTask={checkedTask} checkAllTasks={checkAllTasks} deleteTask={deleteTask} deleteAllTasks={deleteAllTasks}/>
        </>
    )
}