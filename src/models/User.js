const { DataTypes } = require("sequelize")
const db = require("../config/database")

const User = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = User
