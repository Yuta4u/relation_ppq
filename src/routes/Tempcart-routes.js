const express = require("express")
const router = express.Router()

// CONTROLLERS
const {
  postTempcart,
  getTempcart,
} = require("../controllers/Tempcart-controllers")

router.post("/tempcart", postTempcart)
router.get("/tempcart", getTempcart)

module.exports = router
