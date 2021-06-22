import {User} from "../../../common/src/User";
import {Task} from "../../../common/src/Task";
// import axios from 'axios';

export function getUser(): User {
  return {
    userid: 2,
    firstname: "mahsa",
    lastname:"reshadi"
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

var tasks : Task[] = [];



export function saveTask2(task :Task ) {
  return tasks.push(task)
  
} 

export function getTask(): Task[] {
  return tasks;
}
export function deleteTask(task:Task) {
  return tasks.pop();
}

