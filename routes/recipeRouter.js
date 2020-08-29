const express = require('express');

const Recipes = require('../data/helpers/recipeModel');

const router = express.Router();

// @desc    Get all recipes
// @route   GET /api/recipes
router.get('/', async (req, res, next) => {
  try {
    const recipes = await Recipes.getRecipes();

    res.status(200).json({ count: recipes.length, data: recipes });
  } catch (err) {
    next(err);
  }
});

// @desc    Get list of ingredients for recipe
// @route   GET /:id/shoppingList
router.get('/:id/shoppingList', async (req, res, next) => {
  try {
    const shoppingList = await Recipes.getShoppingList(req.params.id);

    res.status(200).json({ data: shoppingList });
  } catch (err) {
    next(err);
  }
});

// @desc    Get ordered list of how to prepare a single recipe
// @route   GET /:id/instructions
router.get('/:id/instructions', async (req, res, next) => {
  try {
    const instructions = await Recipes.getInstructions(req.params.id);

    res.status(200).json({ data: instructions });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
