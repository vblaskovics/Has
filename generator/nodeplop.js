/* eslint import/no-extraneous-dependencies:off */
const nodePlop = require('node-plop')

const plop = nodePlop('./generator/plopfile.js')

const modelGenerator = plop.getGenerator('model')
const userSeed = require('./seeds/user.seed').getSeed()

modelGenerator.runActions({
  name: `${userSeed.modelName}.model.js`,
  seed: userSeed,
}).then(() => {
  console.log('user done')
}).catch((err) => {
  console.log(`plop error: ${err}`)
})
