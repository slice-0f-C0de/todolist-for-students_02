import React, {useState} from 'react';
import './App.css';
import {Todolist, TasksType} from "./Todolist";

export type FilterValuesType = "All" | "Active" | "Completed"


function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JavaScript", isDone: false},
        {id: 4, title: "React", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("All")

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    let TasksForTodolist = tasks

    if (filter === "Active") {
        TasksForTodolist = tasks.filter((el) => el.isDone === false)
    }
    if (filter === "Completed") {
        TasksForTodolist = tasks.filter((el) => el.isDone === true)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={TasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
