import * as dbquery from "./dbquery";
import  * as mysql from 'mysql';

const query = dbquery.query;

function createDb() {
    const con :mysql.Connection = mysql.createConnection(dbquery.serverConfig);
    query("CREATE DATABASE IF NOT EXISTS docarch",[],con);
}
function createTables() {
    query("CREATE TABLE IF NOT EXISTS user (userid INT AUTO_INCREMENT , username VARCHAR(255) , password INT , firstname VARCHAR(255) , lastname VARCHAR(255) , INDEX (userid))");
    query("CREATE TABLE IF NOT EXISTS task (taskid INT AUTO_INCREMENT PRIMARY KEY, userid INT , task TEXT )");
    query("CREATE TABLE IF NOT EXISTS uploadfile (fileid INT AUTO_INCREMENT , address VARCHAR (500) ,INDEX(fileid))");
    query("CREATE TABLE IF NOT EXISTS usersfiles (id INT AUTO_INCREMENT PRIMARY KEY, fileid INT , userid INT , INDEX (fileid,userid) )");
}

export default function installDb() {
    createDb();
    createTables();
}

installDb();

