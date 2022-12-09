const { Sequelize } = require("sequelize")
const db = require("../config/database")

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema

const User = db.define(
  "user",
  {
    photo_profile: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.INTEGER,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    birth: {
      type: DataTypes.STRING,
    },
    cart_id: {
      type: DataTypes.STRING,
    },
    product_id: {
      type: DataTypes.STRING,
    },
    sell_history_id: {
      type: DataTypes.STRING,
    },
    buy_history_id: {
      type: DataTypes.STRING,
    },
    wishlist_id: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

// Export model
module.exports = User
