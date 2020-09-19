const db = require('../models')

const Tutorial = db.tutorials
const { Op } = db.Sequelize

exports.create = async (seed) => {
  const tutorial = await Tutorial.create(seed)
  return tutorial
}

exports.findAll = async (query) => {
  const { title } = query
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null
  const result = await Tutorial.findAll(condition)
  return result
}
