const { Sequelize } = require("sequelize")
const db = require("../config/database")

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema
const HistorySell = db.define(
  "history-sell",
  {
    
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

// Export model
module.exports = HistorySell
