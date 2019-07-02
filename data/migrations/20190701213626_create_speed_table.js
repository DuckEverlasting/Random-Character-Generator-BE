exports.up = function(knex, Promise) {
  return knex.schema.createTable("speed", tbl => {
    tbl.increments();
    tbl
      .integer("monster_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("monsters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.integer("walk");
    tbl.integer("swim");
    tbl.integer("fly");
    tbl.integer("burrow");
    tbl.integer("climb");
    tbl.boolean("hover");
    tbl.string('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("speed");
};
