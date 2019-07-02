exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("reactions").insert([
        {
          monster_id: 38,
          name: "Parry",
          desc:
            "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
        },
        {
          monster_id: 47,
          name: "Split",
          desc:
            "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding."
        },
        {
          monster_id: 61,
          name: "Unnerving Mask",
          desc:
            "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."
        },
        {
          monster_id: 98,
          name: "Parry",
          desc:
            "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon."
        },
        {
          monster_id: 144,
          name: "Parry",
          desc:
            "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
        },
        {
          monster_id: 179,
          name: "Parry",
          desc:
            "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon."
        },
        {
          monster_id: 193,
          name: "Parry",
          desc:
            "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon."
        },
        {
          monster_id: 207,
          name: "Parry",
          desc:
            "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon."
        },
        {
          monster_id: 208,
          name: "Split",
          desc:
            "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly."
        },
        {
          monster_id: 253,
          name: "Shield",
          desc:
            "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer."
        },
        {
          monster_id: 265,
          name: "Rock Catching",
          desc:
            "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it."
        }
      ]);
    });
};
