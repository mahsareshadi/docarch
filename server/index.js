const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./database/dbquery');
const query = connection.query;


const app = express();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    console.log("this is test")
})
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    query(
        `SELECT * FROM user WHERE username = ? AND password = ?`, [username, password],
        (err, result) => {
            if (err) { console.log(err); }

            if (result.length>0) {
                // res.send({
                //     success: true,
                //     username: username,
                    
                // })
                console.log(result)
                

            } else {
                console.log("user not found");
            }

        }

    )


})

app.listen(5001, () => {
    console.log("connect ! port 5001")
});