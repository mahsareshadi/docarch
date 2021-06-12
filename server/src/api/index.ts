import { getTasks, getUser } from "../db";
import express from 'express';
const bodyParser = require('body-parser');
const cors = require('cors');


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
  const task = req.body.task;
  const userid = req.body.id;
  let value = [[task, userid]]
  query('INSERT INTO task (task, userid) VALUES ?', [value], (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });

}
)

//show tasks
app.get('/task', (req, res) => {
  let id = req.id;
  getTasks(id);
})


//END TASK



app.listen(5000, () => {
  console.log("connect ! port 5000")
});