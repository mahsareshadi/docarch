import React from 'react'
import { Itask } from './TodoApp'
import '../css/todolist.css';

interface Props {
  task: Itask;
  completed(done:string):void
}
export function Tasks({ task , completed}: Props) {


  return (
    <div className="todo">
       <li className="todo-item">
        {task.taskname}
      </li>
      <button onClick={()=>{completed(task.taskname)}} className="done-btn">&#10004;</button>
    </div>
  )
}
