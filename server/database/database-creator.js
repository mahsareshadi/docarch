const dbquery = require("./dbquery");
const mysql = require('mysql');

const query = dbquery.query;

function createDb() {
    const con = mysql.createConnection(dbquery.serverConfig);
    query(
        "CREATE DATABASE IF NOT EXISTS docarch",
        () => {
            con.end();
        },
        con
    );
}
function createTables() {
    query("CREATE TABLE IF NOT EXISTS user (userid INT AUTO_INCREMENT , username VARCHAR(255) , password INT , firstname VARCHAR(255) , lastname VARCHAR(255) , INDEX (userid))");
    query("CREATE TABLE IF NOT EXISTS task (taskid INT AUTO_INCREMENT PRIMARY KEY, eid INT , task TEXT )");
    query("CREATE TABLE IF NOT EXISTS file (fileid INT AUTO_INCREMENT , address VARCHAR (500) ,INDEX(fileid))");
    query("CREATE TABLE IF NOT EXISTS usersfiles (id INT AUTO_INCREMENT PRIMARY KEY, fileid INT , userid INT , INDEX (fileid,userid) )");
}

function installDb() {
    createDb();
    createTables();
}

installDb();
