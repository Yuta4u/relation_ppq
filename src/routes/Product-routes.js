const express = require("express")
const router = express.Router()

// CONTROLLERS
const { postProduct } = require("../controllers/Product-controllers")

router.post("/product", postProduct)

module.exports = router
