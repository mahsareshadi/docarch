import { insertInto, query, selectFrom } from './dbquery';
import { User } from "../../../common/src/User";
import { Task } from "../../../common/src/Task";
import { installDb } from './database-creator';



installDb();

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

export async function getTasks(userId: number): Promise<Task[] | null> {
  const result = selectFrom<Task>('SELECT task FROM task WHERE userid = ?', [userId]);
  if ((await result).length > 0) {
    return result;
  } else {
    console.log("no task found");
    return null;
  }

}

export async function saveTask(value: (string | number)[][]): Promise<number> {
  const result = await insertInto('INSERT INTO task (task, userid) VALUES ?', [value]);
  return result.insertId;
}