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
  for (const task of tasks) {
    if (task.taskid === insertId && task.task === "test2") {
      foundTask = task;
      break;
    }
  }
  assert(foundTask !== null, `saved tasks must exist in the list`);
  foundTask.task = "test2-1";


  let affected = await db.deleteTask(foundTask);
  assert(affected !== null, `one task deleted `);

  let task = await db.getTasks(user.userid);
  assert(task === null, `Did not expected value`)


}
//test1();
//end task test

async function test2() {
  let user = await db.getUser("mahsareshadi", "123456789");
  assert(user !== null, `Expected exiting user`);

  let users = await db.getAllUsers();
  console.log(users);
  assert(users !== null, `Expected show all users`);

  let insertid = await db.uploadFiles({ address: "test12.pdf" });
  console.log(insertid);
  assert(insertid > 0, 'save file address in table');

  let savefileInsertid = await db.saveFiles(insertid, user.userid);
  console.log(savefileInsertid);
  assert(savefileInsertid > 0, 'save file and user id in table');

  let usersfiles = await db.getUserFile(user.userid);
  console.log(usersfiles);
  assert(usersfiles !== null, 'expected show at least one file');

  let userid= await db.getUserId("mahsareshadi");
  console.log(userid);
  assert(userid !== null , 'expected find id')

}
test2();
