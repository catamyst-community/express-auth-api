const usersSeed = require('./seed.json')

module.exports = {
  registerSeed: (req, res, next) => {
    res.send({
      message: `Registered seed users`,
      data: usersSeed,
    })
  },

  register: (req, res, next) => {
    res.send({
      message: `Registered new user`,
      data: {},
    })
  },

  login: (req, res, next) => {
    res.send({
      message: `Logged in to existing user`,
      data: {},
    })
  },

  getAll: (req, res, next) => {
    res.send({
      message: `Get all users`,
      data: usersSeed,
    })
  },

  getById: (req, res, next) => {
    res.send({
      message: `Get user by id`,
      data: {},
    })
  },

  removeAll: (req, res, next) => {
    res.send({
      message: `Remove all users`,
    })
  },
}
