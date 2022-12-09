const mysql = require("mysql")

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
})
const sql = `CREATE DATABASE eternal_db`
db.connect((err) => {
  err ? console.error(err) : console.log("Connected to database!")
})

db.query(sql, (err, result) => {
  if (err) throw err
  console.log("Data berhasil di dipost")
})
