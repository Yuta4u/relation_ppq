const cors = require("cors")
const db = require("./src/config/database")
const bodyParser = require("body-parser")
const express = require("express")
const multer = require("multer")
const app = express()

// MODELS
// const models = require("./src/models/models-index")

// // ROUTES
const tempcart = require("./src/routes/Tempcart-routes")
const product = require("./src/routes/Product-routes")

app.use(bodyParser.json()) // untuk memparser json body
app.use(express.json())
app.use(cors())

app.use(tempcart)
app.use(product)

db.sync({ alter: true })
  .then(() => {})
  .catch((err) => console.log(err))

const port = 5000

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

// const cekFileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true)
//   } else {
//     cb(null, false)
//   }
// }
var upload = multer({ storage: storage })

// app.use("/images", express.static(path.join(__dirname, "../images")))
app.use(upload.single("gambar"))

db.authenticate().then(() => {
  app.listen(port, () =>
    console.log(`server running at http://localhost:${port}`)
  )
})
