import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { Tasks } from './Tasks';
import '../css/todolist.css';

export interface Itask {
  taskname: string;
  taskid: number
}
export function TodoApp() {
  const [task, setTask] = useState<string>("");
  const [todolist, setTodolist] = useState<Itask[]>([]);

  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }
  function addtask() {

    const newtask = { taskname: task, taskid: -1 }
    setTodolist([...todolist, newtask]);
    setTask("");
  }

  return (
    <>
      <div className="form">
        <input value={task} type="text" placeholder="task ..." className="todo-input" onChange={handlechange} />
        <button className="todo-button , form-btn" type="submit" onClick={addtask}><i className="fa">&#xf0fe;</i></button>
      </div>
      <div className="list-of-todos">
        <div className="todo-container">
          <ul className='todo-list'>
            {todolist.map((task: Itask, key: number) => {
              return <Tasks key={key} task={task} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
