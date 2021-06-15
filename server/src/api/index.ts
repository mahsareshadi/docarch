import { getTasks, getUser, saveTask } from "../db";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  console.log("this is test");
})
//START LOGIN
app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await getUser(username, password);
  if (user === null){
    res.writeHead(500);
    res.write("user not found")
  } else {
    res.send(user);
  }
});
//END LOGIN


//TASK
//add task
app.post('/addTask', (req, res) => {
  const task : string = req.body.task;
  const userid : number = req.body.id;
  let value = [[task, userid]]
  saveTask(value);

}
);

//show tasks
app.get('/getTask', (req, res) => {
  let id :number = req.userId;
  getTasks(id);
})


//END TASK



app.listen(5000, () => {
  console.log("connect ! port 5000")
});