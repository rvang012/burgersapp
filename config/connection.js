var mysql = require("mysql");
var credentials = require('./config')

if (process.env.JAWSDB_URL) {
  var connection = myswl.createConnection(process.env.JAWSDB_URL)
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: credentials.root,
  password: credentials.password,
  database: "burgers"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
