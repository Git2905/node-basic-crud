const mySql = require("mysql2");
const mySQLConnectionPool = mySql.createPool({
    host: "localhost",
    user: "root",
    password: "Prince@123",
    database: "testdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

module.exports = mySQLConnectionPool;