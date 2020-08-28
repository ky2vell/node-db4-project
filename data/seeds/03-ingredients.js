exports.seed = async function (knex) {
  await knex('ingredients').insert([
    {
      name: 'crust',
      step_number: 1,
      quantity_id: 1
    },
    {
      name: 'apple',
      step_number: 2,
      quantity_id: 3
    },
    {
      name: 'sprinkles',
      step_number: 1,
      quantity_id: 4
    },
    {
      name: 'oroes',
      step_number: 2,
      quantity_id: 2
    }
  ]);
};
