const mysql     = require('mysql')
const modules   = require('./modules')
require('dotenv').config()

const mysqlConn = mysql.createConnection({
    host      : process.env.MYSQL_HOST,
    port      : process.env.MYSQL_PORT,
    user      : process.env.MYSQL_USER,
    password  : process.env.MYSQL_PASS,
    database  : process.env.MYSQL_DATABASE
})

mysqlConn.connect( (err) => {
    if (err) {
      console.error('Connect error: ' + err)
      mysqlConn.end()
      return
    }
    console.log(`Connected to mySqlDb, Id: ${mysqlConn.threadId} >>>> ${modules.curentDate().cyan}\n`.gray )
})

module. exports = mysqlConn
