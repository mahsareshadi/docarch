const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const cors = require('cors');
const myssql=require('mysql');



app.use(express.json());

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "M@hs@1997",
    database: "mydb"
});

app.listen(5000,()=>{
    console.log("connect ! port 3001")
});