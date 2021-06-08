const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./database/dbquery');
const query = connection.query;


const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    console.log("this is test");
})
//START LOGIN
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    query(
        `SELECT firstname , lastname FROM user WHERE username = ? AND password = ?`, [username, password],
        (err, result) => {
            if (err) { console.log(err); }

            if (result.length > 0) {
                // res.send({
                //     success: true,
                //     username: username,
                // })
                res.send(result)


            } else {
                console.log("user not found")
            }

        }

    )


})

//END LOGIN

//START SHOW USER
app.post('/home', (req, res) => {
    query(
        'SELECT firstname , lastname FROM user WHERE userid=2 ', (err, result) => {
            if (err) { console.log(err); }

            res.send(result);
        }
    )
})
//END SHOW USER




app.listen(5000, () => {
    console.log("connect ! port 5000")
});