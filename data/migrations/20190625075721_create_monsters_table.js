exports.up = function(knex, Promise) {
  return knex.schema.createTable("monsters", tbl => {
    tbl.increments();
    tbl.string("slug", 255).notNullable();
    tbl.string("name", 255).notNullable();
    tbl.string("size", 255);
    tbl.string("type", 255);
    tbl.string("subtype", 255);
    tbl.string("group", 255);
    tbl.string("alignment", 255);
    tbl.string("armor_class", 255);
    tbl.string("armor_desc", 255);
    tbl.integer("hit_points");
    tbl.string("hit_dice", 255);
    tbl.integer("strength");
    tbl.integer("dexterity");
    tbl.integer("constitution");
    tbl.integer("intelligence");
    tbl.integer("wisdom");
    tbl.integer("charisma");
    tbl.integer("strength_save");
    tbl.integer("dexterity_save");
    tbl.integer("constitution_save");
    tbl.integer("intelligence_save");
    tbl.integer("wisdom_save");
    tbl.integer("charisma_save");
    tbl.integer("perception");
    tbl.string("damage_vulnerabilities", 255);
    tbl.string("damage_resistances", 255);
    tbl.string("damage_immunities", 255);
    tbl.string("condition_immunities", 255);
    tbl.string("senses", 255);
    tbl.string("languages", 255);
    tbl.string("challenge_rating", 255);
    tbl.string("terrain", 255);
    tbl.string("source", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("monsters");
};
