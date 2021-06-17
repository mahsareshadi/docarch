import { Task } from "../../../common/src/Task";
import * as db from "./"

function assert(cond: boolean, message: string): asserts cond {
  if (!cond) {
    console.error(message);
    throw message;
  }
}
//task test
async function test1() {
  let user = await db.getUser("wrongtest", "12345");
  assert(user === null, `Did not expected value`);

  user = await db.getUser("mahsareshadi", "123456789");
  assert(user !== null, `Expected exiting user`);


  let insertId = await db.saveTask({ task: "test2", userid: user.userid });
  assert(insertId > 0, `Tasks inserted`);

  let tasks = await db.getTasks(user.userid);
  assert(tasks != null, `must have at least one task`);
  let foundTask: Task | null = null;
  for(const task of tasks){
    if (task.taskid === insertId && task.task === "test2"){
      foundTask = task;
      break;
    }
  }
  assert(foundTask !== null, `saved tasks must exist in the list`);
  foundTask.task = "test2-1";
  

  let affected = await db.deleteTask(foundTask);
  assert (affected !==null , `one task deleted `);

  let task = await db.getTasks(user.userid);
    assert(task === null , `Did not expected value`)


}
test1();
//end task test

