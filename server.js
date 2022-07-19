const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Connect to database
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

app.get("/", (req, res) => {
  res.json({
    mesage: "Hello World",
  });
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
