var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "anthas":*/
  con.query("CREATE DATABASE anthas", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

              

