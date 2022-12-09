const { Sequelize } = require("sequelize")

const db = new Sequelize("eternal_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

module.exports = db
