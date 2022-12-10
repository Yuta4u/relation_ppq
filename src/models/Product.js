const { DataTypes } = require("sequelize")
const db = require("../config/database")

const Product = db.define(
  "product",
  {
    gambar: {
      type: DataTypes.STRING,
    },
    product_name: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = Product
