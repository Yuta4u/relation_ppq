const { Sequelize } = require("sequelize")
const db = require("../config/database")

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema

function TempCart() {
  const TempCart = db.define(
    "temp-cart",
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  )

  TempCart.associate = (models) => {
    TempCart.hasMany(models.Product, {
      foreignKey: "creator_id",
    })
  }
  TempCart.sync()
}

TempCart()
// Export model
module.exports = TempCart
