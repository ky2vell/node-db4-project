exports.seed = async function (knex) {
  await knex('recipes').insert([
    {
      name: 'Apple Pie'
    },
    {
      name: 'Ice Cream Sundae'
    }
  ]);
};
