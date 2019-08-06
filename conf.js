const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost',
user :  'root',
password :  'Toto69',
database :  'order'
});

connection.connect((err) => {
  if (err) throw err;
console.log("Connected!");
});

module.exports = connection;
    