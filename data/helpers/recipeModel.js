const db = require('../config');

function getRecipes() {
  return db('recipes');
}

// return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
  return db('recipe_ingredients as ri')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .join('quantity as q', 'q.id', 'i.quantity_id')
    .where('r.id', recipe_id)
    .select('i.id', 'i.name', 'q.quantity');
}

// should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
  return db('recipe_ingredients as ri')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .where('r.id', recipe_id)
    .select('i.id', 'i.instructions', 'i.step_number')
    .orderBy('step_number');
}

module.exports = { getRecipes, getShoppingList, getInstructions };
