const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findByName
};

async function find(query) {
  let monsters
  if (query.terrain) {
    const terrain = query.terrain;
    delete query.terrain;
    console.log(terrain)
    monsters = await db("monsters")
      .where('terrain', 'like', `%${terrain}%`)

  } else {
    monsters = await db("monsters")
      .where(query)
  }
  monsters = await findSpeed(monsters);
  monsters = await findActions(monsters);
  monsters = await findLegendaries(monsters);
  monsters = await findSpecials(monsters);
  monsters = await findReactions(monsters);
  return monsters;
}

async function findById(id) {
  let monsters = await db("monsters").where("id", id);
  monsters = await findSpeed(monsters);
  monsters = await findActions(monsters);
  monsters = await findLegendaries(monsters);
  monsters = await findSpecials(monsters);
  monsters = await findReactions(monsters);
  return monsters[0];
}

async function findByName(name) {
  const monsters = await db("monsters").where("name", name);
  monsters = await findSpeed(monsters).first();
  return monsters.first();
}

async function findSpeed(monsters) {
  const withSpeed = monsters.map(async monster => {
    let speed = await db("speed")
      .where("monster_id", monster.id)
      .select("walk", "swim", "fly", "burrow", "climb", "hover", "notes")
      .first();
    if (speed) {
      return { ...monster, speed: speed };
    } else {
      return { ...monster, speed: "" };
    }  });
  const result = await Promise.all(withSpeed);
  return result;
}

async function findActions(monsters) {
  const withActions = monsters.map(async monster => {
    let actions = await db("actions")
      .select("name", "desc", "attack_bonus", "damage_dice", "damage_bonus")
      .where("monster_id", monster.id)
      .first();
    if (actions) {
      return { ...monster, actions: actions };
    } else {
      return { ...monster, actions: "" };
    }  });
  const result = await Promise.all(withActions);
  return result;
}

async function findLegendaries(monsters) {
  const withLegendaries = monsters.map(async monster => {
    let legendary_actions = await db("legendary_actions")
      .select("name", "desc", "attack_bonus", "damage_dice")
      .where("monster_id", monster.id)
      .first();
    if (legendary_actions) {
      return { ...monster, legendary_actions: legendary_actions };
    } else {
      return { ...monster, legendary_actions: "" };
    }
  });
  const result = await Promise.all(withLegendaries);
  return result;
}

async function findSpecials(monsters) {
  const withSpecials = monsters.map(async monster => {
    let special_abilities = await db("special_abilities")
      .select("name", "desc", "attack_bonus", "damage_dice")
      .where("monster_id", monster.id)
      .first();
    if (special_abilities) {
      return { ...monster, special_abilities: special_abilities };
    } else {
      return { ...monster, special_abilities: "" };
    }
  });
  const result = await Promise.all(withSpecials);
  return result;
}

async function findReactions(monsters) {
  const withReactions = monsters.map(async monster => {
    let reactions = await db("reactions")
      .select("name", "desc")
      .where("monster_id", monster.id)
      .first();
    if (reactions) {
      return { ...monster, reactions: reactions };
    } else {
      return { ...monster, reactions: "" };
    }
  });
  const result = await Promise.all(withReactions);
  return result;
}
