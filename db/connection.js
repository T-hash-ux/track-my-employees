const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    // MySQL Username
    user: "root",

    password: "tmsm4222@9312",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
  });
  
  module.exports = connection;