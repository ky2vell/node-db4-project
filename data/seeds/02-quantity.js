exports.seed = async function (knex) {
  await knex('quantity').insert([
    { quantity: 1 },
    { quantity: 2 },
    { quantity: 3 },
    { quantity: 4 }
  ]);
};
