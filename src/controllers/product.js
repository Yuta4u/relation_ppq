const product = require("../models/product-model")

module.exports.postProduct = (req, res) => {
  product.create(req.body).then((result) => {
    res.status(200).json({
      message: "User Created",
      data: result,
    })
  })
}
