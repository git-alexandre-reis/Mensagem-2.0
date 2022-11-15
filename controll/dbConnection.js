const mySql = require('mysql2')

/*exports.POOL = POOL = mySql.createPool({
    "user": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "database": process.env.DB_DATABASE
})*/

exports.POOL = POOL = mySql.createPool({
    "user": "bdefc63441ee7a",
    "password": "88841029",
    "host": "us-cdbr-east-06.cleardb.net",
    "port": "3306",
    "database": "heroku_b001304af4d5c4a"
})

