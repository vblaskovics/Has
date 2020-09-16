const db = require('../models')
const tutorialCrudService = require('../services/tutorial.crud.service')

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty',
    })
  }

  // Create a tutorial
  const seed = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  }

  // Save tutorial in the database
  try {
    const tutorial = await tutorialCrudService.create(seed)
    res.send(tutorial)
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while creating the Tutorial.',
    })
  }
}

exports.findAll = async (req, res) => {
  try {
    const result = await tutorialCrudService.findAll()
    res.send(result)
  } catch (error) {
    res.status(500).send({
      message:
        error.message || 'Some error occurred while find all tutorials.',
    })
  }
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
