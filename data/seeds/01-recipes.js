exports.seed = async function (knex) {
  await knex('recipes').insert([
    {
      name: 'Apple Pie',
      instructions:
        'Put apple on top of pie crust then stick on oven. Wait 5 days. Enjoy!'
    },
    {
      name: 'Ice Cream Sundae',
      instructions:
        'Steal ice cream from child. Top ice cream with toppings. Bon appetit!'
    }
  ]);
};
