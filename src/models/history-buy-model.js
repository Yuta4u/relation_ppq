const { Sequelize } = require("sequelize")
const db = require("../config/database")

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema
const HistoryBuy = db.define(
  "history-buy",
  {
    cart_id: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

// Export model
module.exports = HistoryBuy
