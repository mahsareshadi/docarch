import { User } from "../../../common/src/User";
import { Task } from "../../../common/src/Task";
import axios from 'axios';

export function getUser(): User {
  return {
    userid: 2,
    firstname: "mahsa",
    lastname: "reshadi"
  }
  // axios
  // .post("http://localhost:5000/login",
  //     {
  //         username: username,
  //         password: password,
  //     })
  // .then((response) => {
  //     if (response !== null) {
  //         setUserinfo(response.data[0]);
  //         // console.log(response);

  //     }
  // });
}

var tasks: Task[] = [];



export async function saveTask(task: Omit<Task, "taskid">) {
  return axios
    .post("http://localhost:5000/saveTask",
      {
        task: task.task,
        id: task.userid,
      })
  // .then((response: any) => { console.log(response.data) })
}


export function getTask(): Task[] {

  axios
    .get("http://localhost:5000/getTask")
    .then((response) => response.data)

  return tasks;
}
export async function deleteTask(task: Task) {
  return axios
  .post("http://localhost:5000/deleteTask",
  {
    taskid:task.taskid,
    userid:task.userid
  })
}
