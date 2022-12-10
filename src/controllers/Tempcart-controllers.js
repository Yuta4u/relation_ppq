const { Tempcart, Product } = require("../models/models-index")

module.exports.postTempcart = (req, res) => {
  console.log(req.body)
  Tempcart.create(req.body).then((result) => {
    res.status(200).json({
      message: "Tempcart Created!",
      data: result,
    })
  })
}

module.exports.getTempcart = (req, res) => {
  console.log(req.body)
  Tempcart.findAll({ where: { id: 1 }, include: Product }).then((res) => {
    console.log(res[0].products.map((e) => e.product_name))
  })
}
