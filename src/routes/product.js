const express = require("express")
const router = express.Router()

// controllers
const { postProduct } = require("../controllers/product")

router.post("/product", postProduct)

module.exports = router
