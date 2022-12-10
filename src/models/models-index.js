const Product = require("./Product")
const Tempcart = require("./Tempcart")
const User = require("./User")

// TEMP CART punya banyak Produk
Tempcart.hasMany(Product)
Product.belongsTo(Tempcart)

module.exports = {
  Product,
  Tempcart,
}
