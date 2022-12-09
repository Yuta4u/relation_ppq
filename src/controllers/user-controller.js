const User = require("../models/user-model.js")

module.exports.getUser = (req, res) => {
  User.findAll()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.error(err))
}
