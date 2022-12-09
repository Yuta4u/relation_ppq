const express = require("express")
const router = express.Router()

// controllers
const { getUser } = require("../controllers/user-controller")

router.get("/user", getUser)

module.exports = router
