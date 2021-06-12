import { query } from './dbquery';
import {User} from "../../../common/src/User";

export async function getUser(username: string, password: string): Promise<User | null> {
  try {
    const result = await query<User>(`SELECT firstname , lastname , userid FROM user WHERE username = ? AND password = ?`, [username, password]);

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

export async function getTasks(userId: number): Promise<Task[]> {
  query('SELECT task FROM task WHERE userid = ?', [id], (err, result) => {
    if (err) console.log(err);
    console.log(result)
  });
}