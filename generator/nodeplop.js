/* eslint import/no-extraneous-dependencies:off */
const nodePlop = require('node-plop')

const plop = nodePlop('./plopfile.js')

const basicAdd = plop.getGenerator('model')

basicAdd.runActions({ name: 'modelName', content: 'This is the content' }).then(() => {
  console.log('node-plop finished')
})
