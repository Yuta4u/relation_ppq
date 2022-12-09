const { Sequelize } = require("sequelize")
const db = require("../config/database")

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema

function Product() {
  const Product = db.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      harga: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  )

  Product.associate = (models) => {
    Product.hasMany(models.TempCart, {
      foreignKey: "creator_id",
    })
  }
  Product.sync()
}

Product()
// Export model
module.exports = Product
