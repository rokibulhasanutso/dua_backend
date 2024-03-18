// import the sqlite3 library
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./dua_main.sqlite');

module.exports = db