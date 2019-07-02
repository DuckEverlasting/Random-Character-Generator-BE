exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
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
    tbl.integer("attack_bonus");
    tbl.string("damage_dice", 255);
    tbl.integer("damage_bonus");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
