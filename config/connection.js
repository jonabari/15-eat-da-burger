// Set up MySQL connection.
const mysql = require('mysql')

var connection;

if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
};

mysql://bcvxbznufa0ozf0z:zvykz24gm48iaktw@bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jdzozpdnahjaky3n

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error(`Error connecting: ${err.stack}`)
        return
    }
    console.log(`Connected as id ${connection.threadId}`)
})

// Export connection for our ORM to use.
module.exports = connection