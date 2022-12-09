const express = require("express")
const router = express.Router()

// controllers
const { postTempCart } = require("../controllers/temp-cart")

router.post("/tempcart", postTempCart)

module.exports = router
