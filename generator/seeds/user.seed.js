exports.getSeed = () => ({
  modelName: 'user',
  className: 'User',
  fields: [{
    name: 'name',
    type: 'STRING',
  }, {
    name: 'email',
    type: 'STRING',
  }],
})
