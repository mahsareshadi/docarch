import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import { useState } from 'react'
import { Tasks } from './Tasks';
import { saveTask, deleteTask, getTask } from '../api/index';
import '../css/todolist.css';
import { User } from '../../../common/src/User';
import { Task } from '../../../common/src/Task';


interface Props {
  userinfo: User;
}
export function TodoApp({ userinfo }: Props) {
  const [task, setTask] = useState<string>("");
  const [todolist, setTodolist] = useState<Task[]>([]);
  
  useEffect(()=>
  function showtask(){
    getTask(userinfo.userid).then(response=>{setTodolist(response)
    console.log(todolist);
    })}, []);

  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function addtask(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const newtask = { taskid: -1, task: task, userid: userinfo.userid }
    setTodolist([...todolist, newtask]);
    setTask("");
    saveTask(newtask).then(response => {
      const insertid = response.data;
      newtask.taskid = insertid;
      console.log(newtask.taskid);
    });
  }

  function completed(done: number) {
    const value = todolist.filter((task) => { return task.taskid === done });
    if (value.length === 1) {
      deleteTask(value[0]);
    }
    setTodolist(todolist.filter((task) => {
      return task.taskid !== done
    }));
  }



  return (
    <>
      {/* INPUT */}
      <form className="form">
        <input value={task} type="text" placeholder="Type Your Task Here ..." className="todo-input" onChange={handlechange} />
        <button className="todo-button , form-btn" type="submit" onClick={addtask}><i className="fa">&#xf0fe;</i></button>
      </form>
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
