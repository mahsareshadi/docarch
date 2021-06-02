const express = require('express');
const mysql = require('mysql');

const serverConfig = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "M@hs@1997",
};
const dbConfig = {
    ...serverConfig,
    database: "docarch"
}

let connection;
function query(sql, callback, customConnection) {
    if (!customConnection && !connection) {
        connection = mysql.createConnection(dbConfig);
        connection.connect(err => {
            if (err) return err;
            console.log("connected to db");

        });
    }
    const queryConnection = customConnection ?? connection;
    queryConnection.query(sql, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Successfully ran '${sql}'`)
        }
        if (callback) {
            callback(err, res);
        };
    });
}

function createDb() {
    const con = mysql.createConnection(serverConfig);
    query(
        "CREATE DATABASE docarch",
        () => {
            con.end();
        },
        con
    );
}
function createTables() {
    query("CREATE TABLE emplyee (e-id INT AUTO_INCREMENT , username VARCHAR(255) , password INT , name VARCHAR(255) , lastname VARCHAR(255) , INDEX (e-id))", (err, res)=>{if (err) return err;});
    query("CREATE TABLE to-do-list (id INT AUTO_INCREMENT , e-id INT , task TEXT )", (err, res)=>{if (err) return err;});
    query("CREATE TABLE file (file-id INT AUTO_INCREMENT , address VARCHAR (500) INDEX(file-id))", (err, res)=>{if (err) return err;});
    query("CREATE TABLE file-and-employee (id INT AUTO_INCREMENT , file-id INT , e-id INT)", (err, res)=>{if (err) return err;});
}

function installDb() {
   // createDb();
    createTables();
}

installDb();


module.exports=query;