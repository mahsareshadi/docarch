import * as mysql from 'mysql';

export const serverConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "M@hs@1997",
};

export const dbConfig = {
  ...serverConfig,
  database: "docarch"
}

interface InsertResult {
  insertId: number; //https://github.com/mysqljs/mysql#getting-the-id-of-an-inserted-row
}

interface DeleteResult {
  affectedRows: number;//https://github.com/mysqljs/mysql#getting-the-number-of-affected-rows
}

type SelectResult<T> = T[];

let connection: mysql.Connection;
export async function query<T>(sql: string, params?: any[], customConnection?: mysql.Connection): Promise<T> {
  if (!customConnection && !connection) {
    connection = mysql.createConnection(dbConfig);
    connection.connect(err => {
      if (err) return err;
      console.log("connected to db");

    });
  }
  const queryConnection = customConnection ?? connection;
  return new Promise<T>((resolve, reject) => {
    queryConnection.query(sql, params, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(`Successfully ran '${sql}'`)
      }
      resolve(res);
    });
  })
}

export async function insertInto(sql: string, params?: any[]): Promise<InsertResult> {
  return query<InsertResult>(sql, params);
}

export async function deleteFrom(sql: string, params?: any[]): Promise<DeleteResult> {
  return query<DeleteResult>(sql, params);
}

export async function selectFrom<T>(sql: string, params?: any[]): Promise<SelectResult<T>> {
  return query<SelectResult<T>>(sql, params);
}
