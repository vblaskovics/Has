const db = require('../models')

const Tutorial = db.tutorials
const { Op } = db.Sequelize

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty',
    })
  }

  // Create a tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  }

  // Save tutorial in the database
  try {
    const msg = await Tutorial.create(tutorial)
    res.send(msg)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Tutorial.',
    })
  }
}

exports.findAll = (req, res) => {
  const { title } = req.query
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null

  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.send(data)
    }).catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while find all tutorials.',
      })
    })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.deleteAll = (req, res) => {

}

exports.findAllPublished = (req, res) => {

}
