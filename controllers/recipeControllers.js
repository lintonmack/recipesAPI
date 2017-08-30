var Recipe = require('../models/Recipe')

function recipeControllers (app) {
  app.post('/recipes', function (req, res) {
    var recipe = Recipe(req.body)

    recipe.save(function(error, savedRecipe){
      if (error) {
        res.send({
          error: 'Unable to perform request. An error occurred.'
        })

        return
      }

      res.send({_id: savedRecipe._id})
    })
  })
}

module.exports = recipeControllers
