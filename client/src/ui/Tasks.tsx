import React from 'react'
import '../css/todolist.css';
import { Task } from '../../../common/src/Task';

interface Props {
  task: Task;
  completed(done: number): void
}
export function Tasks({ task, completed }: Props) {


  return (
    <div className="todo">
      <li className="todo-item">
        {task.task}
      </li>
      <button onClick={() => { completed(task.taskid) }} className="done-btn">&#10004;</button>
    </div>
  )
}
