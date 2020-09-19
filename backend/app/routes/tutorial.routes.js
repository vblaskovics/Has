const router = require('express').Router()
const tutorials = require('../controllers/tutorial.crud.controller')
const rules = require('./validators/tutorial.crud.rules')
const validate = require('./validators/validate')

module.exports = (app) => {
  router.post('/', rules.create(), validate, tutorials.create)

  router.get('/', tutorials.findAll)

  router.get('/published', tutorials.findAllPublished)

  router.get('/:id', tutorials.findOne)

  router.put('/:id', tutorials.update)

  router.delete('/:id', tutorials.delete)

  router.delete('/', tutorials.deleteAll)

  app.use('/api/tutorials', router)
}
