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
function query(sql, params, callback, customConnection) {
    if (!customConnection && !connection) {
        connection = mysql.createConnection(dbConfig);
        connection.connect(err => {
            if (err) return err;
            console.log("connected to db");

        });
    }
    const queryConnection = customConnection ?? connection;
    queryConnection.query(sql, params, (err, res) => {
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
module.exports = {
    query: query,
    serverConfig: serverConfig,
    dbConfig: dbConfig
}