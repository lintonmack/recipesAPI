var Recipe = require('../models/Recipe')

function recipeControllers (app) {
  app.post('/recipes', function (req, res) {
    res.send({
      hello: 'world'
    })
  })
}

module.exports = recipeControllers
