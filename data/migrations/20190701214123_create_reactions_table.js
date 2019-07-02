exports.up = function(knex, Promise) {
  return knex.schema.createTable("reactions", tbl => {
    tbl.increments();
    tbl
      .integer("monster_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("monsters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("name", 255).notNullable();
    tbl.string("desc", 2048).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('reactions')
};
