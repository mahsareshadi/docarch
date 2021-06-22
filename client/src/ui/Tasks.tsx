import React from 'react'
import { Itask } from './TodoApp'
import '../css/todolist.css';

interface Props {
  task: Itask;
}
export function Tasks({ task }: Props) {


  return (
    <div className="todo">
       <li className="todo-item">
        {task.taskname}
      </li>
      <button className="done-btn">&#10004;</button>
    </div>
  )
}
