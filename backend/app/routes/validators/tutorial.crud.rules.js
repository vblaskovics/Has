const { body } = require('express-validator')

const create = () => [
  body('title').not().isEmpty(),
  body('description').not().isEmpty(),
]

module.exports = {
  create,
}
