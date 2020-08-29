exports.seed = async function (knex) {
  await knex('ingredients').insert([
    {
      name: 'crust',
      instructions: 'Fashion crust from tree bark',
      step_number: 1,
      quantity_id: 1
    },
    {
      name: 'apple',
      instructions: 'Steal apples from child, add to crust',
      step_number: 2,
      quantity_id: 3
    },
    {
      name: 'sugar',
      instructions: 'Add sugar to pie',
      step_number: 3,
      quantity_id: 2
    },
    {
      name: 'sprinkles',
      instructions: 'Add sprinkles to ice cream',
      step_number: 1,
      quantity_id: 4
    },
    {
      name: 'oroes',
      instructions: 'Add oroes to ice cream',
      step_number: 2,
      quantity_id: 2
    },
    {
      name: 'sugar',
      instructions: 'Add more sugar to ice cream',
      step_number: 3,
      quantity_id: 1
    }
  ]);
};
