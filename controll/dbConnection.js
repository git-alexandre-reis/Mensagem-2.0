const mySql = require('mysql2')

/*exports.POOL = POOL = mySql.createPool({
    "user": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "database": process.env.DB_DATABASE
})*/

exports.POOL = POOL = mySql.createPool({
    "user": "root",
    "password": "admin",
    "host": "localhost",
    "port": "3306",
    "database": "dbMensagem"
})

