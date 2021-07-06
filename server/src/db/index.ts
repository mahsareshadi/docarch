import { deleteFrom, insertInto, selectFrom } from './dbquery';
import { User } from "../../../common/src/User";
import { Task } from "../../../common/src/Task";
import { File } from "../../../common/src/File";
/**
 * returns the user of the given username/password
 * @param username 
 * @param password 
 * @returns 
 */
export async function getUser(username: string, password: string): Promise<User | null> {
  try {
    const result = await selectFrom<User>(
      `SELECT firstname , lastname , userid FROM user WHERE username = ? AND password = ?`, [username, password]);

    if (result.length > 0) {
      return result[0];
    } else {
      console.warn(`user ${username} not found`);
      return null;
    }
  } catch (e) {
    console.error(`user not found`, e);
    return null;
  }
}
//TASK
export async function getTasks(userid: number): Promise<Task[] | null> {
  const result = selectFrom<Task>('SELECT * FROM task WHERE userid = ?', [userid]);
  if ((await result).length > 0) {
    return result;
  } else {
    console.log("no task found");
    return null;
  }
}

export async function saveTask(task: Omit<Task, 'taskid'>): Promise<number> {
  const result = await insertInto('INSERT INTO task (task, userid) VALUES (?)', [[task.task, task.userid]]);
  return result.insertId;
}

export async function deleteTask(task: Omit<Task, 'task'>) {
  const result = await deleteFrom('DELETE FROM task WHERE taskid = ?', [task.taskid]);
  return result.affectedRows;
}
//END TASK



//FILE
export async function getAllUsers(): Promise<User[]> {
  const result = await selectFrom<User>('SELECT userid ,firstname , lastname FROM user');
  return result;
}

export async function getUserId(username:string){
  const result = await selectFrom<User>('SELECT userid FROM user WHERE username = ?' , [username]);
  return result[0].userid
 ;
}

export async function uploadFiles(file: Omit<File, 'fileid'>) {
  const result = await insertInto('INSERT INTO uploadfile (address) VALUES (?)', [[file]]);
  return result.insertId;
}
export async function saveFiles(fileid: number, userid: number) : Promise<number>{
  const result = await insertInto('INSERT INTO usersfiles (fileid , userid ) values (?)', [[fileid, userid]]);
  return result.insertId;
}
export async function getUserFile(userid: number) {
  const result = await selectFrom
    ("SELECT uploadfile.* FROM uploadfile JOIN usersfiles ON uploadfile.fileid = usersfiles.fileid where usersfiles.userid = ?", [userid]);
  return result;
}

