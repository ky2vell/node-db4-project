exports.up = async function (knex) {
  await knex.schema.createTable('recipes', tbl => {
    tbl.increments('id');
    tbl.text('name').notNull();
  });

  await knex.schema.createTable('quantity', tbl => {
    tbl.increments('id');
    tbl.float('quantity').notNull();
  });

  await knex.schema.createTable('ingredients', tbl => {
    tbl.increments('id');
    tbl.text('name').notNull();
    tbl.text('instructions').notNull();
    tbl.integer('step_number');
    tbl
      .integer('quantity_id')
      .references('id')
      .inTable('quantity')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });

  await knex.schema.createTable('recipe_ingredients', tbl => {
    tbl.integer('recipe_id').notNull().references('id').inTable('recipes');
    tbl
      .integer('ingredient_id')
      .notNull()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.primary(['recipe_id', 'ingredient_id']);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('recipe_ingredients');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('quantity');
  await knex.schema.dropTableIfExists('recipes');
};
