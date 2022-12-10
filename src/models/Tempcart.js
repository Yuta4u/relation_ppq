const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Tempcart = db.define("tempcart", {
  sub_total: {
    type: DataTypes.INTEGER,
  },
})

module.exports = Tempcart
