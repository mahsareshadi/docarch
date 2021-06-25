import * as db from "../db";
import * as express from 'express';
import * as cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  console.log("this is test");
})

//START LOGIN
app.get('/userLogin', async (req, res) => {
  const username = String( req.query.username);
  const password = String( req.query.password);
  const user = await db.getUser(username, password);
  if (user === null) {
    // res.writeHead(500);
    res.write("user not found")
  } else {
    res.send(user);
  }
});
//END LOGIN


//TASK
//add task
app.post('/saveTask', async (req, res) => {
  const task: string = req.body.task;
  const userid: number = req.body.id;
  const taskInsertid = await db.saveTask({ task, userid });
  if (taskInsertid === null) {
    // res.writeHead(500);
    res.write("task dosent save");
  } else {
    //it is insert id
    res.send(taskInsertid + "");
  }
});

//show tasks
app.get('/getTask', async (req, res) => {
  let id: number = Number(req.query.userid);
  const usertask = await db.getTasks(id);
  if (usertask === null) {
    res.write("user has no task")
  } else {
    res.send(usertask);
  }
})

//delete task
app.delete('/deleteTask', async (req, res) => {
  const taskid: number = req.body.taskid;
  const userid: number = req.body.userid;
  const deleteTask = await db.deleteTask({ taskid, userid });
  if (deleteTask === null) {
    res.write("no task deleted")
  } else {
    res.send(deleteTask + "")
    // res.writeHead(200).write("one task deleted");
  }
})

//END TASK



app.listen(5000, () => {
  console.log("connect ! port 5000")
});