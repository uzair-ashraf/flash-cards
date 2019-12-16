const mysql = require('mysql');
const creds = require('../credentials');

const database = mysql.createConnection(creds);
database.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to database...')
})

module.exports = database;
