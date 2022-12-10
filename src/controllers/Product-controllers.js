const { Product } = require("../models/models-index")

module.exports.postProduct = (req, res) => {
  console.log(req.body)
  Product.create(req.body).then((result) => {
    res.status(200).json({
      message: "Product created!",
      data: result,
    })
  })
}
