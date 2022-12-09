const { Sequelize } = require("sequelize")
const db = require("../config/database.js")

// init DataTypes
const { DataTypes } = Sequelize

// Define schema
const User = db.define(
  "User",
  {
    nama: {
      type: DataTypes.STRING,
    },
    id_favorit: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

// Define schema
const Favorit = db.define(
  "Favorit",
  {
    id_favorit: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    merek: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

User.hasOne(Favorit, { foreignKey: "id_favorit" })
User.belongsTo(Favorit, { foreignKey: "id_favorit" })

// Export model Product
module.exports = { User, Favorit }
