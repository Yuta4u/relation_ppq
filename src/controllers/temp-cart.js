const tempCart = require("../models/temp-cart-model")

module.exports.postTempCart = (req, res) => {
  tempCart.create(req.body).then((result) => {
    res.status(200).json({
      message: "User Created",
      data: result,
    })
  })
}
