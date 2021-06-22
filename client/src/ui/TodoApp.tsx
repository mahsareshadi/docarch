import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { Tasks } from './Tasks';
import {saveTask} from '../api/index';
import '../css/todolist.css';
import { User } from '../../../common/src/User';
import { Task } from '../../../common/src/Task';

export interface Itask {
  taskname: string;
  taskid: number
}
interface Props {
  userinfo: User;
}
export function TodoApp({ userinfo }: Props) {
  const [task, setTask] = useState<string>("");
  const [todolist, setTodolist] = useState<Task[]>([]);

  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function addtask() {
    const newtask = { taskid: -1 ,task: task,  userid:userinfo.userid}
    setTodolist([...todolist, newtask]);
    setTask("");
    const insertId=saveTask(newtask);
  }

  function completed(done: string) {
    setTodolist(todolist.filter((task) => {
      return task.task !== done
    }));
  }

  return (
    <>
      {/* INPUT */}
      <div className="form">
        <input value={task} type="text" placeholder="Type Your Task Here ..." className="todo-input" onChange={handlechange} />
        <button className="todo-button , form-btn" type="submit" onClick={addtask}><i className="fa">&#xf0fe;</i></button>
      </div>
      {/* LIST */}
      <div className="list-of-todos">
        <div className="todo-container">
          <ul className='todo-list'>
            {todolist.map((task: Task, key: number) => {
              return <Tasks completed={completed} key={key} task={task} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
