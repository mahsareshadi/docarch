import { User } from "../../../common/src/User";
import { Task } from "../../../common/src/Task";
import {File} from '../../../common/src/File'
import axios from 'axios';
let currentUser: User | null = null;
export async function getUser(username?: string, password?: string): Promise<User> {
  // if (!currentUser) {
  //   currentUser = {
  //     userid: 123,
  //     firstname: "mahsa",
  //     lastname: "reshadi"
  //   }
  // }

  //TASK
  return axios
    .get("http://localhost:5000/userLogin", {
      params: {
        username: username,
        password: password,
      }
    }).then((response: any) => currentUser = response.data);
  
  // return currentUser;
}

export async function saveTask(task: Omit<Task, "taskid">) {
  return axios
    .post("http://localhost:5000/saveTask",
      {
        task: task.task,
        id: task.userid,
      })
  // .then((response: any) => { console.log(response.data) })
}


async function getTask(id: number): Promise<Task[]> {
  return axios
    .get("http://localhost:5000/getTask", {
      params: { userid: id }
    }).then((response: any) => response.data);
}

let tasks: Promise<Task[]> | null = null;
export async function getUserTasks() {
  if (!tasks) {
    if (currentUser!==null){
    tasks = getTask(currentUser.userid);
    tasks.then(() => {
      setTimeout(() => {
        tasks = null;
      }, 100);
    });
  }  return tasks
}
}
export async function deleteTask(task: Task) {
  return axios
    .delete("http://localhost:5000/deleteTask",
      {
        data: {
          taskid: task.taskid,
          userid: task.userid
        }
      })
}
//END TASK

//FILE

// export function getAllUsers():User[]{
//   return ;
// }

export async function uploadFiles(file: Omit<File, "fileid">) {
  return axios
    .post("http://localhost:5000/uploadFile",
      {
        address: file.address,
        userid:currentUser?.userid
      })
}
async function getFile(id: number): Promise<File[]> {
  return axios
    .get("http://localhost:5000/getFile", {
      params: { userid: id }
    }).then((response: any) => response.data);
}

let files: Promise<File[]> | null = null;
export async function getUserFiles() {
  if (!files) {
    if (currentUser!==null){
    files = getFile(currentUser.userid);
    files.then(() => {
      setTimeout(() => {
        files = null;
      }, 100);
    });
  }  return files
}
}
