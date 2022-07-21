const mysql = require("mysql2");

//connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    //Your MySQL username
    user: "root",
    //Your MySQL password
    password: "D@t@b@$3Acce$$",
    database: "election",
  },
  console.log("Connected to the election database")
);

module.exports = db;
