const express = require ('express');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "M@hs@1997",
    database: "docarch"
});
con.connect(err=>{
    if (err) return err;
    console.log("connected to db");
});

function createDb (){
    const sql = "CREATE DATABASE docarch";
    con.query(sql,(err,res)=>{
        if (err) return err;
        console.log("database created");
    });
}

createDb();