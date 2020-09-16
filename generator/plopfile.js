module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('model', {
    description: 'app model file',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What shoul be the model name?',
    }, {
      type: 'input',
      name: 'content',
      message: 'What shoul be the content?',
    }],
    actions: [{
      type: 'add',
      path: '../app/models/{{name}}',
      templateFile: './templates/modelTemplate.hbs',
    }],
  })

  plop.setGenerator('model2', {
    description: 'app model file',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What shoul be the model2 name?',
    }],
    actions: [{
      type: 'add',
      path: '../app/models/{{name}}',
      templateFile: './templates/modelTemplate.hbs',
    }],
  })
}
