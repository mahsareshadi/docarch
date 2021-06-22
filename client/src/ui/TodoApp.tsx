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

  function completed(done:string){
    setTodolist(todolist.filter((task)=>{
      return task.taskname != done
    }))
  }
  return (
    <>
      <div className="form">
        <input value={task} type="text" placeholder="Type Your Task Here ..." className="todo-input" onChange={handlechange} />
        <button className="todo-button , form-btn" type="submit" onClick={addtask}><i className="fa">&#xf0fe;</i></button>
      </div>
      <div className="list-of-todos">
        <div className="todo-container">
          <ul className='todo-list'>
            {todolist.map((task: Itask, key: number) => {
              return <Tasks completed={completed} key={key} task={task} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
