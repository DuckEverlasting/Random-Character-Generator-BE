exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          monster_id: 1,
          name: "Enslave (3/day)",
          desc:
            "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
        },
        {
          monster_id: 1,
          name: "Multiattack",
          desc: "The aboleth makes three tentacle attacks."
        },
        {
          monster_id: 1,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
          attack_bonus: 9,
          damage_dice: "3d6",
          damage_bonus: 5
        },
        {
          monster_id: 1,
          name: "Tentacle",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
          attack_bonus: 9,
          damage_dice: "2d6",
          damage_bonus: 5
        },
        {
          monster_id: 2,
          name: "Club",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
          attack_bonus: 2,
          damage_dice: "1d4"
        },
        {
          monster_id: 3,
          name: "Acid Breath (Recharge 5-6)",
          desc:
            "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "12d8"
        },
        {
          monster_id: 3,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
          attack_bonus: 11,
          damage_dice: "2d10 + 1d8",
          damage_bonus: 6
        },
        {
          monster_id: 3,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 11,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 3,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 3,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 3,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
          attack_bonus: 11,
          damage_dice: "2d8",
          damage_bonus: 6
        },
        {
          monster_id: 4,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
          attack_bonus: 12,
          damage_dice: "2d10 + 1d10",
          damage_bonus: 7
        },
        {
          monster_id: 4,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
          attack_bonus: 12,
          damage_dice: "2d6",
          damage_bonus: 7
        },
        {
          monster_id: 4,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 4,
          name: "Lightning Breath (Recharge 5-6)",
          desc:
            "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "12d10"
        },
        {
          monster_id: 4,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 4,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
          attack_bonus: 12,
          damage_dice: "2d8",
          damage_bonus: 7
        },
        {
          monster_id: 5,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +11 to hit, reach,.0 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
          attack_bonus: 11,
          damage_dice: "2d10",
          damage_bonus: 6
        },
        {
          monster_id: 5,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Fire Breath.** The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one. **Sleep Breath.** The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
          attack_bonus: 0,
          damage_dice: "13d6"
        },
        {
          monster_id: 5,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 11,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 5,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 5,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 5,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
          attack_bonus: 11,
          damage_dice: "2d8",
          damage_bonus: 6
        },
        {
          monster_id: 6,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage.",
          attack_bonus: 12,
          damage_dice: "2d10",
          damage_bonus: 7
        },
        {
          monster_id: 6,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Lightning Breath.** The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one. **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
          attack_bonus: 0,
          damage_dice: "12d10"
        },
        {
          monster_id: 6,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
          attack_bonus: 12,
          damage_dice: "2d6",
          damage_bonus: 7
        },
        {
          monster_id: 6,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 6,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 6,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
          attack_bonus: 12,
          damage_dice: "2d8",
          damage_bonus: 7
        },
        {
          monster_id: 7,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
          attack_bonus: 11,
          damage_dice: "2d10",
          damage_bonus: 6
        },
        {
          monster_id: 7,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Acid Breath.** The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one. **Slowing Breath.** The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
          attack_bonus: 0,
          damage_dice: "12d8"
        },
        {
          monster_id: 7,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 11,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 7,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 7,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 7,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
          attack_bonus: 11,
          damage_dice: "2d8",
          damage_bonus: 6
        },
        {
          monster_id: 8,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
          attack_bonus: 14,
          damage_dice: "2d10",
          damage_bonus: 8
        },
        {
          monster_id: 8,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Fire Breath.** The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one. **Weakening Breath.** The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "12d10"
        },
        {
          monster_id: 8,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
          attack_bonus: 14,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 8,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 8,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 8,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 14,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 9,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage.",
          attack_bonus: 11,
          damage_dice: "2d10 + 2d6",
          damage_bonus: 6
        },
        {
          monster_id: 9,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 11,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 9,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
        },
        {
          monster_id: 9,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 9,
          name: "Poison Breath (Recharge 5-6)",
          desc:
            "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "16d6"
        },
        {
          monster_id: 9,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
          attack_bonus: 11,
          damage_dice: "2d8",
          damage_bonus: 6
        },
        {
          monster_id: 10,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.",
          attack_bonus: 14,
          damage_dice: "2d10 + 2d6",
          damage_bonus: 8
        },
        {
          monster_id: 10,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
          attack_bonus: 14,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 10,
          name: "Fire Breath (Recharge 5-6)",
          desc:
            "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "18d6"
        },
        {
          monster_id: 10,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 10,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 10,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 14,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 11,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
          attack_bonus: 13,
          damage_dice: "2d10",
          damage_bonus: 8
        },
        {
          monster_id: 11,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Cold Breath.** The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one. **Paralyzing Breath.** The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "13d8"
        },
        {
          monster_id: 11,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
          attack_bonus: 13,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 11,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 11,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 11,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 13,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 12,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.",
          attack_bonus: 11,
          damage_dice: "2d10 + 1d8",
          damage_bonus: 6
        },
        {
          monster_id: 12,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 11,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 12,
          name: "Cold Breath (Recharge 5-6)",
          desc:
            "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "12d8"
        },
        {
          monster_id: 12,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 12,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 12,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
          attack_bonus: 11,
          damage_dice: "2d8",
          damage_bonus: 6
        },
        {
          monster_id: 13,
          name: "Multiattack",
          desc: "The elemental makes two slam attacks."
        },
        {
          monster_id: 13,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
          attack_bonus: 8,
          damage_dice: "2d8",
          damage_bonus: 5
        },
        {
          monster_id: 13,
          name: "Whirlwind (Recharge 4-6)",
          desc:
            "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone. If the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
        },
        {
          monster_id: 14,
          name: "Acid Breath (Recharge 5-6)",
          desc:
            "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
        },
        {
          monster_id: 14,
          name: "Bite",
          desc:
            "Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.",
          attack_bonus: 15,
          damage_dice: "2d10 + 2d8",
          damage_bonus: 8
        },
        {
          monster_id: 14,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
          attack_bonus: 15,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 14,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 14,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 14,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 15,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 15,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
          attack_bonus: 16,
          damage_dice: "2d10 + 2d10",
          damage_bonus: 9
        },
        {
          monster_id: 15,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
          attack_bonus: 16,
          damage_dice: "2d6",
          damage_bonus: 9
        },
        {
          monster_id: 15,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 15,
          name: "Lightning Breath (Recharge 5-6)",
          desc:
            "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "16d10"
        },
        {
          monster_id: 15,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 15,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
          attack_bonus: 16,
          damage_dice: "2d8",
          damage_bonus: 9
        },
        {
          monster_id: 16,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
          attack_bonus: 14,
          damage_dice: "2d10",
          damage_bonus: 8
        },
        {
          monster_id: 16,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons: **Fire Breath.** The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one. **Sleep Breath.** The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
          attack_bonus: 0,
          damage_dice: "16d6"
        },
        {
          monster_id: 16,
          name: "Change Shape",
          desc:
            "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        },
        {
          monster_id: 16,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
          attack_bonus: 14,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 16,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 16,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 16,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 14,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 17,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage.",
          attack_bonus: 16,
          damage_dice: "2d10",
          damage_bonus: 9
        },
        {
          monster_id: 17,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Lightning Breath.** The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one. **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
          attack_bonus: 0,
          damage_dice: "16d10"
        },
        {
          monster_id: 17,
          name: "Change Shape",
          desc:
            "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        },
        {
          monster_id: 17,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
          attack_bonus: 16,
          damage_dice: "1d6",
          damage_bonus: 9
        },
        {
          monster_id: 17,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 17,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 17,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
          attack_bonus: 0,
          damage_dice: "2d8",
          damage_bonus: 9
        },
        {
          monster_id: 18,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
          attack_bonus: 15,
          damage_dice: "2d10",
          damage_bonus: 8
        },
        {
          monster_id: 18,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Acid Breath.** The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one. **Slowing Breath.** The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
          attack_bonus: 0,
          damage_dice: "14d8"
        },
        {
          monster_id: 18,
          name: "Change Shape",
          desc:
            "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        },
        {
          monster_id: 18,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
          attack_bonus: 15,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 18,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 18,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 18,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 15,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 19,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
          attack_bonus: 17,
          damage_dice: "2d10",
          damage_bonus: 10
        },
        {
          monster_id: 19,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Fire Breath.** The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one. **Weakening Breath.** The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "13d10"
        },
        {
          monster_id: 19,
          name: "Change Shape",
          desc:
            "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        },
        {
          monster_id: 19,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
          attack_bonus: 17,
          damage_dice: "2d6",
          damage_bonus: 10
        },
        {
          monster_id: 19,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 19,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 19,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
          attack_bonus: 17,
          damage_dice: "2d8",
          damage_bonus: 10
        },
        {
          monster_id: 20,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.",
          attack_bonus: 15,
          damage_dice: "2d10 + 3d6",
          damage_bonus: 9
        },
        {
          monster_id: 20,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage.",
          attack_bonus: 15,
          damage_dice: "4d6",
          damage_bonus: 8
        },
        {
          monster_id: 20,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 20,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 20,
          name: "Poison Breath (Recharge 5-6)",
          desc:
            "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "22d6"
        },
        {
          monster_id: 20,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 16,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 21,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
          attack_bonus: 17,
          damage_dice: "2d10 + 4d6",
          damage_bonus: 10
        },
        {
          monster_id: 21,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
          attack_bonus: 17,
          damage_dice: "2d6",
          damage_bonus: 10
        },
        {
          monster_id: 21,
          name: "Fire Breath (Recharge 5-6)",
          desc:
            "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "26d6"
        },
        {
          monster_id: 21,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 21,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 21,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
          attack_bonus: 17,
          damage_dice: "2d8",
          damage_bonus: 10
        },
        {
          monster_id: 22,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
          attack_bonus: 17,
          damage_dice: "2d10",
          damage_bonus: 10
        },
        {
          monster_id: 22,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons.  **Cold Breath.** The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.   **Paralyzing Breath.** The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "15d8"
        },
        {
          monster_id: 22,
          name: "Change Shape",
          desc:
            "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice). In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        },
        {
          monster_id: 22,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
          attack_bonus: 17,
          damage_dice: "2d6",
          damage_bonus: 10
        },
        {
          monster_id: 22,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 22,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 22,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
          attack_bonus: 17,
          damage_dice: "2d8",
          damage_bonus: 10
        },
        {
          monster_id: 23,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage.",
          attack_bonus: 14,
          damage_dice: "2d10 + 2d8",
          damage_bonus: 8
        },
        {
          monster_id: 23,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
          attack_bonus: 14,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 23,
          name: "Cold Breath (Recharge 5-6)",
          desc:
            "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "16d8"
        },
        {
          monster_id: 23,
          name: "Frightful Presence",
          desc:
            "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
        },
        {
          monster_id: 23,
          name: "Multiattack",
          desc:
            "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 23,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
          attack_bonus: 14,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 24,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.",
          attack_bonus: 12,
          damage_dice: "2d10",
          damage_bonus: 6
        },
        {
          monster_id: 24,
          name: "Multiattack",
          desc: "The sphinx makes two claw attacks."
        },
        {
          monster_id: 24,
          name: "Roar (3/Day)",
          desc:
            "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw. **First Roar.** Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. **Second Roar.** Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. **Third Roar.** Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
        },
        {
          monster_id: 25,
          name: "Multiattack",
          desc: "The armor makes two melee attacks."
        },
        {
          monster_id: 25,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 26,
          name: "Acid Spray (Recharge 6)",
          desc:
            "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "3d6"
        },
        {
          monster_id: 26,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
          attack_bonus: 5,
          damage_dice: "2d6 + 1d6",
          damage_bonus: 3
        },
        {
          monster_id: 27,
          name: "Fist",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 27,
          name: "Multiattack",
          desc: "The ape makes two fist attacks."
        },
        {
          monster_id: 27,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 28,
          name: "Dagger",
          desc:
            "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 29,
          name: "Light Crossbow",
          desc:
            "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 6,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 29,
          name: "Multiattack",
          desc: "The assassin makes two shortsword attacks."
        },
        {
          monster_id: 29,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 6,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 30,
          name: "Rake",
          desc:
            "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) slashing damage.",
          attack_bonus: 1,
          damage_dice: "1d4",
          damage_bonus: -1
        },
        {
          monster_id: 31,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "3d6",
          damage_bonus: 4
        },
        {
          monster_id: 32,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 33,
          name: "Warhammer",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
          attack_bonus: 5,
          damage_dice: "1d8 + 1d6",
          damage_bonus: 3
        },
        {
          monster_id: 34,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.",
          attack_bonus: 1,
          damage_dice: "1d4",
          damage_bonus: -1
        },
        {
          monster_id: 35,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
          attack_bonus: 2,
          damage_bonus: 1
        },
        {
          monster_id: 36,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
          attack_bonus: 14,
          damage_dice: "3d8 + 3d8",
          damage_bonus: 8
        },
        {
          monster_id: 36,
          name: "Multiattack",
          desc:
            "The balor makes two attacks: one with its longsword and one with its whip."
        },
        {
          monster_id: 36,
          name: "Teleport",
          desc:
            "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          monster_id: 36,
          name: "Variant: Summon Demon (1/Day)",
          desc:
            "The demon chooses what to summon and attempts a magical summoning. A balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 36,
          name: "Whip",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",
          attack_bonus: 14,
          damage_dice: "2d6 + 3d6",
          damage_bonus: 8
        },
        {
          monster_id: 37,
          name: "Light Crossbow",
          desc:
            "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d8",
          damage_bonus: 1
        },
        {
          monster_id: 37,
          name: "Scimitar",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 38,
          name: "Dagger",
          desc:
            "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d4",
          damage_bonus: 3
        },
        {
          monster_id: 38,
          name: "Multiattack",
          desc:
            "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
        },
        {
          monster_id: 38,
          name: "Scimitar",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 39,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft ., one target. Hit: 6 (1d6 + 3) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 39,
          name: "Hurl Flame",
          desc:
            "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
          attack_bonus: 5,
          damage_dice: "3d6"
        },
        {
          monster_id: 39,
          name: "Multiattack",
          desc:
            "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
        },
        {
          monster_id: 39,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 40,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
          attack_bonus: 5,
          damage_dice: "2d6 + 2d6",
          damage_bonus: 3
        },
        {
          monster_id: 41,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
          damage_bonus: 1
        },
        {
          monster_id: 42,
          name: "Beard",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 42,
          name: "Glaive",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
          attack_bonus: 5,
          damage_dice: "1d10",
          damage_bonus: 3
        },
        {
          monster_id: 42,
          name: "Multiattack",
          desc:
            "The devil makes two attacks: one with its beard and one with its glaive."
        },
        {
          monster_id: 43,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
          attack_bonus: 10,
          damage_dice: "3d10",
          damage_bonus: 6
        },
        {
          monster_id: 43,
          name: "Constrict",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
          attack_bonus: 10,
          damage_dice: "2d10 + 2d10",
          damage_bonus: 6
        },
        {
          monster_id: 43,
          name: "Lightning Breath (Recharge 5-6)",
          desc:
            "The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "12d10"
        },
        {
          monster_id: 43,
          name: "Multiattack",
          desc:
            "The behir makes two attacks: one with its bite and one to constrict."
        },
        {
          monster_id: 43,
          name: "Swallow",
          desc:
            "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.",
          attack_bonus: 0,
          damage_dice: "6d6"
        },
        {
          monster_id: 44,
          name: "Greataxe",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d12",
          damage_bonus: 3
        },
        {
          monster_id: 45,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 45,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
          attack_bonus: 3,
          damage_dice: "2d4",
          damage_bonus: 2
        },
        {
          monster_id: 45,
          name: "Multiattack",
          desc:
            "The bear makes two attacks: one with its bite and one with its claws."
        },
        {
          monster_id: 46,
          name: "Acid Breath (Recharge 5-6)",
          desc:
            "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "5d8"
        },
        {
          monster_id: 46,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage.",
          attack_bonus: 4,
          damage_dice: "1d10",
          damage_bonus: 2
        },
        {
          monster_id: 47,
          name: "Pseudopod",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
          attack_bonus: 5,
          damage_dice: "1d6 + 4d8",
          damage_bonus: 3
        },
        {
          monster_id: 48,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 48,
          name: "Teleport (Recharge 4-6)",
          desc:
            "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
        },
        {
          monster_id: 49,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 50,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage.",
          attack_bonus: 5,
          damage_dice: "1d10 + 1d6",
          damage_bonus: 3
        },
        {
          monster_id: 50,
          name: "Lightning Breath (Recharge 5-6)",
          desc:
            "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "4d10"
        },
        {
          monster_id: 51,
          name: "Tusk",
          desc:
            "Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 52,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
          attack_bonus: 8,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 52,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
          attack_bonus: 8,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 52,
          name: "Multiattack",
          desc:
            "The devil makes three attacks: two with its claws and one with its sting."
        },
        {
          monster_id: 52,
          name: "Multiattack",
          desc:
            "The devil makes three attacks: two with its claws and one with its sting."
        },
        {
          monster_id: 52,
          name: "Sting",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .",
          attack_bonus: 8,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 52,
          name: "Sting",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .",
          attack_bonus: 8,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 53,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d10",
          damage_bonus: 2
        },
        {
          monster_id: 53,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Fire Breath.** The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one. **Sleep Breath.** The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
          attack_bonus: 0,
          damage_dice: "4d6"
        },
        {
          monster_id: 54,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d10",
          damage_bonus: 3
        },
        {
          monster_id: 54,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Lightning Breath.** The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one. **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon.",
          attack_bonus: 0,
          damage_dice: "3d10"
        },
        {
          monster_id: 55,
          name: "Bite",
          desc:
            "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 55,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 55,
          name: "Multiattack",
          desc:
            "The bear makes two attacks: one with its bite and one with its claws."
        },
        {
          monster_id: 56,
          name: "Javelin",
          desc:
            "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.",
          attack_bonus: 4,
          damage_dice: "2d6",
          damage_bonus: 2
        },
        {
          monster_id: 56,
          name: "Morningstar",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "2d8",
          damage_bonus: 2
        },
        {
          monster_id: 57,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "4d12",
          damage_bonus: 4
        },
        {
          monster_id: 57,
          name: "Deadly Leap",
          desc:
            "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space."
        },
        {
          monster_id: 58,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
          attack_bonus: 5,
          damage_dice: "1d4"
        },
        {
          monster_id: 59,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
          damage_bonus: 1
        },
        {
          monster_id: 60,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 60,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 60,
          name: "Multiattack",
          desc:
            "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow."
        },
        {
          monster_id: 60,
          name: "Pike",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d10",
          damage_bonus: 4
        },
        {
          monster_id: 61,
          name: "Animate Chains (Recharges after a Short or Long Rest)",
          desc:
            "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried. Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
        },
        {
          monster_id: 61,
          name: "Chain",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.",
          attack_bonus: 8,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 61,
          name: "Multiattack",
          desc: "The devil makes two attacks with its chains."
        },
        {
          monster_id: 62,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 62,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 62,
          name: "Fire Breath (Recharge 5-6)",
          desc:
            "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "7d8"
        },
        {
          monster_id: 62,
          name: "Horns",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage.",
          attack_bonus: 7,
          damage_dice: "1d12",
          damage_bonus: 4
        },
        {
          monster_id: 62,
          name: "Multiattack",
          desc:
            "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns."
        },
        {
          monster_id: 63,
          name: "Multiattack",
          desc:
            "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
        },
        {
          monster_id: 63,
          name: "Pincer",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 63,
          name: "Tentacles",
          desc:
            "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          monster_id: 64,
          name: "Haste (Recharge 5-6)",
          desc:
            "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
        },
        {
          monster_id: 64,
          name: "Multiattack",
          desc: "The golem makes two slam attacks."
        },
        {
          monster_id: 64,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.",
          attack_bonus: 8,
          damage_dice: "2d10",
          damage_bonus: 5
        },
        {
          monster_id: 65,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 65,
          name: "Moan",
          desc:
            "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
        },
        {
          monster_id: 65,
          name: "Multiattack",
          desc:
            "The cloaker makes two attacks: one with its bite and one with its tail."
        },
        {
          monster_id: 65,
          name: "Phantasms (Recharges after a Short or Long Rest)",
          desc:
            "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear. Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight. A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
        },
        {
          monster_id: 65,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage.",
          attack_bonus: 6,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 66,
          name: "Morningstar",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage.",
          attack_bonus: 12,
          damage_dice: "3d8",
          damage_bonus: 8
        },
        {
          monster_id: 66,
          name: "Multiattack",
          desc: "The giant makes two morningstar attacks."
        },
        {
          monster_id: 66,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage.",
          attack_bonus: 12,
          damage_dice: "4d10",
          damage_bonus: 8
        },
        {
          monster_id: 67,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.",
          attack_bonus: 3,
          damage_dice: "1d4",
          damage_bonus: 1
        },
        {
          monster_id: 68,
          name: "Club",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
          attack_bonus: 2,
          damage_dice: "1d4"
        },
        {
          monster_id: 69,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 69,
          name: "Constrict",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 70,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d10",
          damage_bonus: 2
        },
        {
          monster_id: 70,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Acid Breath.** The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one. **Slowing Breath.** The dragon exhales gas in a 1 5-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
          attack_bonus: 0,
          damage_dice: "4d8"
        },
        {
          monster_id: 71,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.",
          attack_bonus: 8,
          damage_dice: "1d6",
          damage_bonus: 5
        },
        {
          monster_id: 71,
          name: "Change Shape",
          desc:
            "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice). In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
        },
        {
          monster_id: 71,
          name: "Constrict",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 72,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.",
          damage_bonus: 1
        },
        {
          monster_id: 73,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target",
          attack_bonus: 4,
          damage_dice: "1d10",
          damage_bonus: 2
        },
        {
          monster_id: 74,
          name: "Dagger",
          desc:
            "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 74,
          name: "Multiattack",
          desc: "The fanatic makes two melee attacks."
        },
        {
          monster_id: 75,
          name: "Scimitar",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 76,
          name: "Crush",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way. While attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target. A creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 76,
          name: "Darkness Aura (1/day)",
          desc:
            "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
        },
        {
          monster_id: 77,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 77,
          name: "Multiattack",
          desc: "The dog makes two bite attacks."
        },
        {
          monster_id: 78,
          name: "Poisoned Dart",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 78,
          name: "War Pick",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 79,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
          attack_bonus: 2,
          damage_dice: "1d4"
        },
        {
          monster_id: 80,
          name: "Change Shape",
          desc:
            "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice). In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
        },
        {
          monster_id: 80,
          name: "Healing Touch (3/Day)",
          desc:
            "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
        },
        {
          monster_id: 80,
          name: "Mace",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.",
          attack_bonus: 8,
          damage_dice: "1d6 + 4d8",
          damage_bonus: 4
        },
        {
          monster_id: 80,
          name: "Multiattack",
          desc: "The deva makes two melee attacks."
        },
        {
          monster_id: 81,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 82,
          name: "Create Whirlwind",
          desc:
            "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it. A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
        },
        {
          monster_id: 82,
          name: "Multiattack",
          desc: "The djinni makes three scimitar attacks."
        },
        {
          monster_id: 82,
          name: "Scimitar",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice).",
          attack_bonus: 9,
          damage_dice: "2d6 + 1d6",
          damage_bonus: 5
        },
        {
          monster_id: 83,
          name: "Multiattack",
          desc: "The doppelganger makes two melee attacks."
        },
        {
          monster_id: 83,
          name: "Read Thoughts",
          desc:
            "The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
        },
        {
          monster_id: 83,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "1d6",
          damage_bonus: 4
        },
        {
          monster_id: 84,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d4",
          damage_bonus: 4
        },
        {
          monster_id: 85,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage.",
          attack_bonus: 13,
          damage_dice: "3d12",
          damage_bonus: 7
        },
        {
          monster_id: 85,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage.",
          attack_bonus: 13,
          damage_dice: "2d8",
          damage_bonus: 7
        },
        {
          monster_id: 85,
          name: "Multiattack",
          desc:
            "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
        },
        {
          monster_id: 85,
          name: "Steam Breath (Recharge 5-6)",
          desc:
            "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.",
          attack_bonus: 0,
          damage_dice: "15d6"
        },
        {
          monster_id: 85,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.",
          attack_bonus: 13,
          damage_dice: "3d12",
          damage_bonus: 7
        },
        {
          monster_id: 86,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
          attack_bonus: 2,
          damage_dice: "1d6"
        },
        {
          monster_id: 86,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage.",
          attack_bonus: 2,
          damage_dice: "2d4"
        },
        {
          monster_id: 86,
          name: "Fetid Cloud (1/Day)",
          desc:
            "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take re"
        },
        {
          monster_id: 86,
          name: "Multiattack",
          desc:
            "The dretch makes two attacks: one with its bite and one with its claws."
        },
        {
          monster_id: 87,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage.",
          attack_bonus: 6,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 87,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.",
          attack_bonus: 6,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 87,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
          attack_bonus: 6,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 87,
          name: "Multiattack",
          desc:
            "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
        },
        {
          monster_id: 88,
          name: "Hand Crossbow",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 88,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 89,
          name: "Quarterstaff",
          desc:
            "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh or if wielded with two hands.",
          attack_bonus: 2,
          damage_dice: "1d6"
        },
        {
          monster_id: 90,
          name: "Club",
          desc:
            "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh.",
          attack_bonus: 2,
          damage_dice: "1d4"
        },
        {
          monster_id: 90,
          name: "Fey Charm",
          desc:
            "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can. Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours. The dryad can have no more than one humanoid and up to three beasts charmed at a time."
        },
        {
          monster_id: 91,
          name: "Enlarge (Recharges after a Short or Long Rest)",
          desc:
            "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
        },
        {
          monster_id: 91,
          name: "Invisibility (Recharges after a Short or Long Rest)",
          desc:
            "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it ."
        },
        {
          monster_id: 91,
          name: "Javelin",
          desc:
            "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 91,
          name: "War Pick",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 92,
          name: "Blinding Breath (Recharge 6)",
          desc:
            "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          monster_id: 92,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 92,
          name: "Variant: Summon Mephits (1/Day)",
          desc:
            "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 93,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 94,
          name: "Multiattack",
          desc: "The elemental makes two slam attacks."
        },
        {
          monster_id: 94,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
          attack_bonus: 8,
          damage_dice: "2d8",
          damage_bonus: 5
        },
        {
          monster_id: 95,
          name: "Hurl Flame",
          desc:
            "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage.",
          attack_bonus: 7,
          damage_dice: "5d6"
        },
        {
          monster_id: 95,
          name: "Multiattack",
          desc:
            "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
        },
        {
          monster_id: 95,
          name: "Scimitar",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage.",
          attack_bonus: 10,
          damage_dice: "2d6 + 2d6",
          damage_bonus: 6
        },
        {
          monster_id: 96,
          name: "Gore",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.",
          attack_bonus: 8,
          damage_dice: "3d8",
          damage_bonus: 6
        },
        {
          monster_id: 96,
          name: "Stomp",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage.",
          attack_bonus: 8,
          damage_dice: "3d10",
          damage_bonus: 6
        },
        {
          monster_id: 97,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage."
        },
        {
          monster_id: 97,
          name: "Ram",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
        },
        {
          monster_id: 98,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.",
          attack_bonus: 7,
          damage_dice: "1d8 + 3d8",
          damage_bonus: 3
        },
        {
          monster_id: 98,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage.",
          attack_bonus: 8,
          damage_dice: "1d8 + 3d8",
          damage_bonus: 4
        },
        {
          monster_id: 98,
          name: "Multiattack",
          desc: "The erinyes makes three attacks"
        },
        {
          monster_id: 98,
          name: "Variant: Rope of Entanglement",
          desc:
            "Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks."
        },
        {
          monster_id: 99,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 99,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "2d4",
          damage_bonus: 2
        },
        {
          monster_id: 99,
          name: "Multiattack",
          desc:
            "The ettercap makes two attacks: one with its bite and one with its claws."
        },
        {
          monster_id: 99,
          name: "Variant: Web Garrote",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. Hit: 4 (1d4 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the target can't breathe, and the ettercap has advantage on attack rolls against it.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 99,
          name: "Web (Recharge 5-6)",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning damage."
        },
        {
          monster_id: 100,
          name: "Battleaxe",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 5
        },
        {
          monster_id: 100,
          name: "Morningstar",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 5
        },
        {
          monster_id: 100,
          name: "Multiattack",
          desc:
            "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
        },
        {
          monster_id: 101,
          name: "Multiattack",
          desc: "The elemental makes two touch attacks."
        },
        {
          monster_id: 101,
          name: "Touch",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 102,
          name: "Greatsword",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage.",
          attack_bonus: 11,
          damage_dice: "6d6",
          damage_bonus: 7
        },
        {
          monster_id: 102,
          name: "Multiattack",
          desc: "The giant makes two greatsword attacks."
        },
        {
          monster_id: 102,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage.",
          attack_bonus: 11,
          damage_dice: "4d10",
          damage_bonus: 7
        },
        {
          monster_id: 103,
          name: "Multiattack",
          desc: "The golem makes two slam attacks."
        },
        {
          monster_id: 103,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 104,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.",
          attack_bonus: 6,
          damage_bonus: 1
        },
        {
          monster_id: 105,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "1d8",
          damage_bonus: 1
        },
        {
          monster_id: 107,
          name: "Greataxe",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage.",
          attack_bonus: 9,
          damage_dice: "3d12",
          damage_bonus: 6
        },
        {
          monster_id: 107,
          name: "Multiattack",
          desc: "The giant makes two greataxe attacks."
        },
        {
          monster_id: 107,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.",
          attack_bonus: 9,
          damage_dice: "4d10",
          damage_bonus: 6
        },
        {
          monster_id: 108,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 108,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 108,
          name: "Multiattack",
          desc:
            "The gargoyle makes two attacks: one with its bite and one with its claws."
        },
        {
          monster_id: 109,
          name: "Engulf",
          desc:
            "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it. An engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
        },
        {
          monster_id: 109,
          name: "Pseudopod",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.",
          attack_bonus: 4,
          damage_dice: "3d6"
        },
        {
          monster_id: 110,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage.",
          attack_bonus: 3,
          damage_dice: "2d8",
          damage_bonus: 3
        },
        {
          monster_id: 110,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 111,
          name: "Etherealness",
          desc:
            "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
        },
        {
          monster_id: 111,
          name: "Horrifying Visage",
          desc:
            "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
        },
        {
          monster_id: 111,
          name: "Possession (Recharge 6)",
          desc:
            "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies. The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
        },
        {
          monster_id: 111,
          name: "Withering Touch",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage.",
          attack_bonus: 5,
          damage_dice: "4d6",
          damage_bonus: 3
        },
        {
          monster_id: 112,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage.",
          attack_bonus: 2,
          damage_dice: "2d6",
          damage_bonus: 2
        },
        {
          monster_id: 112,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          monster_id: 113,
          name: "Fist",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage.",
          attack_bonus: 9,
          damage_dice: "3d10",
          damage_bonus: 6
        },
        {
          monster_id: 113,
          name: "Multiattack",
          desc: "The ape makes two fist attacks."
        },
        {
          monster_id: 113,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage.",
          attack_bonus: 9,
          damage_dice: "7d6",
          damage_bonus: 6
        },
        {
          monster_id: 114,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 114,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "2d4",
          damage_bonus: 1
        },
        {
          monster_id: 114,
          name: "Multiattack",
          desc:
            "The badger makes two attacks: one with its bite and one with its claws."
        },
        {
          monster_id: 115,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 116,
          name: "Tusk",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 117,
          name: "Bite",
          desc:
            "Bite. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 118,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 118,
          name: "Constrict",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 119,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 120,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
          attack_bonus: 8,
          damage_dice: "3d10",
          damage_bonus: 5
        },
        {
          monster_id: 120,
          name: "Multiattack",
          desc:
            "The crocodile makes two attacks: one with its bite and one with its tail."
        },
        {
          monster_id: 120,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
          attack_bonus: 8,
          damage_dice: "2d8",
          damage_bonus: 5
        },
        {
          monster_id: 121,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 121,
          name: "Multiattack",
          desc:
            "The eagle makes two attacks: one with its beak and one with its talons."
        },
        {
          monster_id: 121,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 122,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "4d8",
          damage_bonus: 4
        },
        {
          monster_id: 122,
          name: "Ram",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 123,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 — 1) slashing damage.",
          attack_bonus: 1,
          damage_dice: "1d6",
          damage_bonus: -1
        },
        {
          monster_id: 124,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 124,
          name: "Swallow",
          desc:
            "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone."
        },
        {
          monster_id: 125,
          name: "Ram",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
          attack_bonus: 5,
          damage_dice: "2d4",
          damage_bonus: 3
        },
        {
          monster_id: 126,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 127,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 128,
          name: "Ink Cloud (Recharges after a Short or Long Rest)",
          desc:
            "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
        },
        {
          monster_id: 128,
          name: "Tentacles",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 129,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "2d6",
          damage_bonus: 1
        },
        {
          monster_id: 130,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 6,
          damage_dice: "1d4",
          damage_bonus: 4
        },
        {
          monster_id: 131,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 132,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 133,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 133,
          name: "Multiattack",
          desc:
            "The scorpion makes three attacks: two with its claws and one with its sting."
        },
        {
          monster_id: 133,
          name: "Sting",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 4,
          damage_dice: "1d10",
          damage_bonus: 2
        },
        {
          monster_id: 134,
          name: "Ram",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 135,
          name: "Bite",
          desc:
            "Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
          attack_bonus: 9,
          damage_dice: "3d10",
          damage_bonus: 6
        },
        {
          monster_id: 136,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 136,
          name: "Web (Recharge 5-6)",
          desc:
            "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
          attack_bonus: 5
        },
        {
          monster_id: 137,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target.",
          attack_bonus: 4,
          damage_dice: "1d10",
          damage_bonus: 2
        },
        {
          monster_id: 137,
          name: "Swallow",
          desc:
            "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
        },
        {
          monster_id: 138,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "2d4",
          damage_bonus: 2
        },
        {
          monster_id: 138,
          name: "Multiattack",
          desc:
            "The vulture makes two attacks: one with its beak and one with its talons."
        },
        {
          monster_id: 138,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "2d6",
          damage_bonus: 2
        },
        {
          monster_id: 139,
          name: "Sting",
          desc:
            "Sting. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 140,
          name: "Bite",
          desc:
            "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d4",
          damage_bonus: 3
        },
        {
          monster_id: 141,
          name: "Bite",
          desc:
            "Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 142,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther.",
          attack_bonus: 2,
          damage_dice: "5d6"
        },
        {
          monster_id: 142,
          name: "Blinding Spittle (Recharge 5-6)",
          desc:
            "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn."
        },
        {
          monster_id: 142,
          name: "Multiattack",
          desc:
            "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle."
        },
        {
          monster_id: 143,
          name: "Fist",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
          attack_bonus: 9,
          damage_dice: "2d4",
          damage_bonus: 2
        },
        {
          monster_id: 143,
          name: "Multiattack",
          desc:
            "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
        },
        {
          monster_id: 143,
          name: "Pincer",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target.",
          attack_bonus: 9,
          damage_dice: "2d10",
          damage_bonus: 5
        },
        {
          monster_id: 143,
          name: "Variant: Summon Demon (1/Day)",
          desc:
            "The demon chooses what to summon and attempts a magical summoning. A glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 144,
          name: "Multiattack",
          desc: "The gladiator makes three melee attacks or two ranged attacks."
        },
        {
          monster_id: 144,
          name: "Shield Bash",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
          attack_bonus: 7,
          damage_dice: "2d4",
          damage_bonus: 4
        },
        {
          monster_id: 144,
          name: "Spear",
          desc:
            "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 145,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 145,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d8",
          damage_bonus: 1
        },
        {
          monster_id: 145,
          name: "Spear",
          desc:
            "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 146,
          name: "Ram",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
          attack_bonus: 3,
          damage_dice: "1d4",
          damage_bonus: 1
        },
        {
          monster_id: 147,
          name: "Scimitar",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 147,
          name: "Shortbow",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 148,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d10",
          damage_bonus: 4
        },
        {
          monster_id: 148,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Fire Breath.** The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one. **Weakening Breath.** The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "4d10"
        },
        {
          monster_id: 149,
          name: "Gore",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) piercing damage.",
          attack_bonus: 8,
          damage_dice: "2d12",
          damage_bonus: 5
        },
        {
          monster_id: 149,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage.",
          attack_bonus: 8,
          damage_dice: "2d10",
          damage_bonus: 5
        },
        {
          monster_id: 149,
          name: "Petrifying Breath (Recharge 5-6)",
          desc:
            "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic."
        },
        {
          monster_id: 150,
          name: "Pseudopod",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 151,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage.",
          attack_bonus: 4,
          damage_dice: "1d10 + 1d6",
          damage_bonus: 3
        },
        {
          monster_id: 151,
          name: "Poison Breath (Recharge 5-6)",
          desc:
            "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "6d6"
        },
        {
          monster_id: 152,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 152,
          name: "Illusory Appearance",
          desc:
            "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies. The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised."
        },
        {
          monster_id: 152,
          name: "Invisible Passage",
          desc:
            "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her."
        },
        {
          monster_id: 153,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 153,
          name: "Multiattack",
          desc:
            "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target."
        },
        {
          monster_id: 153,
          name: "Tentacles",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "2d6",
          damage_bonus: 2
        },
        {
          monster_id: 154,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 154,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 154,
          name: "Multiattack",
          desc:
            "The griffon makes two attacks: one with its beak and one with its claws."
        },
        {
          monster_id: 155,
          name: "Spiked Bone Club",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d4 + 1d4",
          damage_bonus: 5
        },
        {
          monster_id: 156,
          name: "Spear",
          desc:
            "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 157,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 8,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 157,
          name: "Spit Poison",
          desc:
            "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 8,
          damage_dice: "10d8"
        },
        {
          monster_id: 158,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
          attack_bonus: 9,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 158,
          name: "Multiattack",
          desc: "The sphinx makes two claw attacks."
        },
        {
          monster_id: 159,
          name: "Fire Breath (Recharge 5-6)",
          desc:
            "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "7d6"
        },
        {
          monster_id: 159,
          name: "Heavy Crossbow",
          desc:
            "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d10",
          damage_bonus: 1
        },
        {
          monster_id: 159,
          name: "Longsword",
          desc:
            "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 159,
          name: "Multiattack",
          desc:
            "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
        },
        {
          monster_id: 159,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 160,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "2d4",
          damage_bonus: 1
        },
        {
          monster_id: 160,
          name: "Club",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
          attack_bonus: 3,
          damage_dice: "1d4",
          damage_bonus: 1
        },
        {
          monster_id: 160,
          name: "Luring Song",
          desc:
            "The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated. While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it. A target that successfully saves is immune to this harpy's song for the next 24 hours."
        },
        {
          monster_id: 160,
          name: "Multiattack",
          desc:
            "The harpy makes two attacks: one with its claws and one with its club."
        },
        {
          monster_id: 161,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
          attack_bonus: 5,
          damage_bonus: 1
        },
        {
          monster_id: 162,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 162,
          name: "Fire Breath (Recharge 5-6)",
          desc:
            "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "6d6"
        },
        {
          monster_id: 163,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "2d10",
          damage_bonus: 4
        },
        {
          monster_id: 163,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 163,
          name: "Multiattack",
          desc:
            "The hezrou makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 163,
          name: "Variant: Summon Demon (1/Day)",
          desc:
            "The demon chooses what to summon and attempts a magical summoning. A hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 164,
          name: "Greatclub",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) bludgeoning damage.",
          attack_bonus: 8,
          damage_dice: "3d8",
          damage_bonus: 5
        },
        {
          monster_id: 164,
          name: "Multiattack",
          desc: "The giant makes two greatclub attacks."
        },
        {
          monster_id: 164,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10 + 5) bludgeoning damage.",
          attack_bonus: 8,
          damage_dice: "3d10",
          damage_bonus: 5
        },
        {
          monster_id: 165,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d10",
          damage_bonus: 3
        },
        {
          monster_id: 165,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 165,
          name: "Multiattack",
          desc:
            "The hippogriff makes two attacks: one with its beak and one with its claws."
        },
        {
          monster_id: 166,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d8",
          damage_bonus: 1
        },
        {
          monster_id: 166,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands.",
          attack_bonus: 3,
          damage_dice: "1d8",
          damage_bonus: 1
        },
        {
          monster_id: 167,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way.",
          attack_bonus: 4,
          damage_bonus: 1
        },
        {
          monster_id: 168,
          name: "Fork",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage.",
          attack_bonus: 10,
          damage_dice: "2d8",
          damage_bonus: 6
        },
        {
          monster_id: 168,
          name: "Hurl Flame",
          desc:
            "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
          attack_bonus: 7,
          damage_dice: "4d6"
        },
        {
          monster_id: 168,
          name: "Multiattack",
          desc:
            "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
        },
        {
          monster_id: 168,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
          attack_bonus: 10,
          damage_dice: "1d8",
          damage_bonus: 6
        },
        {
          monster_id: 169,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 170,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
          attack_bonus: 8,
          damage_dice: "1d10",
          damage_bonus: 5
        },
        {
          monster_id: 170,
          name: "Multiattack",
          desc: "The hydra makes as many bite attacks as it has heads."
        },
        {
          monster_id: 171,
          name: "Bite",
          desc:
            "Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
          attack_bonus: 2,
          damage_dice: "1d6"
        },
        {
          monster_id: 172,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage.",
          attack_bonus: 10,
          damage_dice: "2d6 + 3d6",
          damage_bonus: 5
        },
        {
          monster_id: 172,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage.",
          attack_bonus: 10,
          damage_dice: "2d4 + 3d6",
          damage_bonus: 5
        },
        {
          monster_id: 172,
          name: "Multiattack",
          desc:
            "The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
        },
        {
          monster_id: 172,
          name: "Tail",
          desc:
            "Melee Weapon Attack:+10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage.",
          attack_bonus: 10,
          damage_dice: "2d6 + 3d6",
          damage_bonus: 5
        },
        {
          monster_id: 172,
          name: "Wall of Ice",
          desc:
            "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter. When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one. The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
        },
        {
          monster_id: 173,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage.",
          attack_bonus: 3,
          damage_dice: "1d4",
          damage_bonus: 1
        },
        {
          monster_id: 173,
          name: "Frost Breath (Recharge 6)",
          desc:
            "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one."
        },
        {
          monster_id: 173,
          name: "Variant: Summon Mephits (1/Day)",
          desc:
            "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 174,
          name: "Invisibility",
          desc:
            "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
        },
        {
          monster_id: 174,
          name: "Sting (Bite in Beast Form)",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 5,
          damage_dice: "1d4",
          damage_bonus: 3
        },
        {
          monster_id: 175,
          name: "Multiattack",
          desc: "The stalker makes two slam attacks."
        },
        {
          monster_id: 175,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 176,
          name: "Multiattack",
          desc: "The golem makes two melee attacks."
        },
        {
          monster_id: 176,
          name: "Poison Breath (Recharge 5-6)",
          desc:
            "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (l0d8) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "10d8"
        },
        {
          monster_id: 176,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
          attack_bonus: 13,
          damage_dice: "3d8",
          damage_bonus: 7
        },
        {
          monster_id: 176,
          name: "Sword",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) slashing damage.",
          attack_bonus: 13,
          damage_dice: "3d10",
          damage_bonus: 7
        },
        {
          monster_id: 177,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.",
          attack_bonus: 1,
          damage_dice: "1d4",
          damage_bonus: -1
        },
        {
          monster_id: 178,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage."
        },
        {
          monster_id: 179,
          name: "Greatsword",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 179,
          name: "Heavy Crossbow",
          desc:
            "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.",
          attack_bonus: 2,
          damage_dice: "1d10"
        },
        {
          monster_id: 179,
          name: "Leadership (Recharges after a Short or Long Rest)",
          desc:
            "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
        },
        {
          monster_id: 179,
          name: "Multiattack",
          desc: "The knight makes two melee attacks."
        },
        {
          monster_id: 180,
          name: "Dagger",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 180,
          name: "Sling",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 181,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.",
          attack_bonus: 7,
          damage_dice: "3d8",
          damage_bonus: 10
        },
        {
          monster_id: 181,
          name: "Fling",
          desc:
            "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
        },
        {
          monster_id: 181,
          name: "Lightning Storm",
          desc:
            "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "4d10"
        },
        {
          monster_id: 181,
          name: "Multiattack",
          desc:
            "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
        },
        {
          monster_id: 181,
          name: "Tentacle",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.",
          attack_bonus: 7,
          damage_dice: "3d6",
          damage_bonus: 10
        },
        {
          monster_id: 182,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "2d10",
          damage_bonus: 3
        },
        {
          monster_id: 182,
          name: "Dagger",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d4",
          damage_bonus: 3
        },
        {
          monster_id: 182,
          name: "Intoxicating Touch",
          desc:
            "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks."
        },
        {
          monster_id: 182,
          name: "Multiattack",
          desc:
            "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch."
        },
        {
          monster_id: 183,
          name: "Fist",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage",
          attack_bonus: 3,
          damage_dice: "1d4"
        },
        {
          monster_id: 184,
          name: "Paralyzing Touch",
          desc:
            "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 12,
          damage_dice: "3d6"
        },
        {
          monster_id: 185,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 185,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 186,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
          damage_bonus: 1
        },
        {
          monster_id: 187,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 187,
          name: "Heavy Club",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 187,
          name: "Javelin",
          desc:
            "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 187,
          name: "Multiattack",
          desc:
            "The lizardfolk makes two melee attacks, each one with a different weapon."
        },
        {
          monster_id: 187,
          name: "Spiked Shield",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 188,
          name: "Dagger",
          desc:
            "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 189,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft ., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage.",
          attack_bonus: 3,
          damage_dice: "1d4",
          damage_bonus: 1
        },
        {
          monster_id: 189,
          name: "Fire Breath (Recharge 6)",
          desc:
            "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          monster_id: 189,
          name: "Variant: Summon Mephits (1/Day)",
          desc:
            "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 190,
          name: "Touch",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns.",
          attack_bonus: 4,
          damage_dice: "2d6"
        },
        {
          monster_id: 191,
          name: "Gore",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.",
          attack_bonus: 10,
          damage_dice: "4d8",
          damage_bonus: 7
        },
        {
          monster_id: 191,
          name: "Stomp",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.",
          attack_bonus: 10,
          damage_dice: "4d10",
          damage_bonus: 7
        },
        {
          monster_id: 192,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 192,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 192,
          name: "Multiattack",
          desc:
            "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes."
        },
        {
          monster_id: 192,
          name: "Tail Spike",
          desc:
            "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 193,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
          attack_bonus: 9,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 193,
          name: "Multiattack",
          desc:
            "The marilith can make seven attacks: six with its longswords and one with its tail."
        },
        {
          monster_id: 193,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets.",
          attack_bonus: 9,
          damage_dice: "2d10",
          damage_bonus: 4
        },
        {
          monster_id: 193,
          name: "Teleport",
          desc:
            "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          monster_id: 193,
          name: "Variant: Summon Demon (1/Day)",
          desc:
            "The demon chooses what to summon and attempts a magical summoning. A marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 194,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 195,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage.",
          attack_bonus: 5,
          damage_dice: "2d6"
        },
        {
          monster_id: 195,
          name: "Multiattack",
          desc:
            "The medusa makes either three melee attacks —  one with its snake hair and two with its shortsword — or two ranged attacks with its longbow."
        },
        {
          monster_id: 195,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 195,
          name: "Snake Hair",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage.",
          attack_bonus: 5,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 196,
          name: "Spear",
          desc:
            "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack.",
          attack_bonus: 2,
          damage_dice: "1d6"
        },
        {
          monster_id: 197,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 197,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.",
          attack_bonus: 6,
          damage_dice: "2d4",
          damage_bonus: 4
        },
        {
          monster_id: 197,
          name: "Harpoon",
          desc:
            "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 197,
          name: "Multiattack",
          desc:
            "The merrow makes two attacks: one with its bite and one with its claws or harpoon."
        },
        {
          monster_id: 198,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.",
          attack_bonus: 5,
          damage_dice: "1d8 + 1d8",
          damage_bonus: 3
        },
        {
          monster_id: 198,
          name: "Pseudopod",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 199,
          name: "Gore",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 199,
          name: "Greataxe",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.",
          attack_bonus: 6,
          damage_dice: "2d12",
          damage_bonus: 4
        },
        {
          monster_id: 200,
          name: "Gore",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 200,
          name: "Greataxe",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.",
          attack_bonus: 6,
          damage_dice: "2d12",
          damage_bonus: 4
        },
        {
          monster_id: 201,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 202,
          name: "Dreadful Glare",
          desc:
            "The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
        },
        {
          monster_id: 202,
          name: "Multiattack",
          desc:
            "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
        },
        {
          monster_id: 202,
          name: "Rotting Fist",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 203,
          name: "Dreadful Glare",
          desc:
            "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
        },
        {
          monster_id: 203,
          name: "Multiattack",
          desc:
            "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
        },
        {
          monster_id: 203,
          name: "Rotting Fist",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
          attack_bonus: 9,
          damage_dice: "3d6 + 6d6",
          damage_bonus: 4
        },
        {
          monster_id: 204,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage.",
          attack_bonus: 10,
          damage_dice: "5d10",
          damage_bonus: 5
        },
        {
          monster_id: 204,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) slashing damage.",
          attack_bonus: 10,
          damage_dice: "3d6",
          damage_bonus: 5
        },
        {
          monster_id: 204,
          name: "Horror Nimbus (Recharge 5-6)",
          desc:
            "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours."
        },
        {
          monster_id: 204,
          name: "Multiattack",
          desc:
            "The nalfeshnee uses Horror Nimbus if it can.  It then makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 204,
          name: "Teleport",
          desc:
            "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          monster_id: 204,
          name: "Variant: Summon Demon (1/Day)",
          desc:
            "The demon chooses what to summon and attempts a magical summoning. A nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 205,
          name: "Change Shape",
          desc:
            "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies."
        },
        {
          monster_id: 205,
          name: "Claws (Hag Form Only)",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 205,
          name: "Etherealness",
          desc:
            "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession."
        },
        {
          monster_id: 205,
          name: "Nightmare Haunting (1/Day)",
          desc:
            "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic."
        },
        {
          monster_id: 206,
          name: "Ethereal Stride",
          desc:
            "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa."
        },
        {
          monster_id: 206,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage.",
          attack_bonus: 6,
          damage_dice: "2d8 + 2d6",
          damage_bonus: 4
        },
        {
          monster_id: 207,
          name: "Rapier",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d8",
          damage_bonus: 1
        },
        {
          monster_id: 208,
          name: "Pseudopod",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage.",
          attack_bonus: 4,
          damage_dice: "2d6",
          damage_bonus: 2
        },
        {
          monster_id: 209,
          name: "Ink Cloud (Recharges after a Short or Long Rest)",
          desc:
            "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
        },
        {
          monster_id: 209,
          name: "Tentacles",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
          attack_bonus: 4,
          damage_bonus: 1
        },
        {
          monster_id: 210,
          name: "Greatclub",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 210,
          name: "Javelin",
          desc:
            "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 211,
          name: "Morningstar",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 212,
          name: "Change Shape",
          desc:
            "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size."
        },
        {
          monster_id: 212,
          name: "Claw (Oni Form Only)",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 212,
          name: "Glaive",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form.",
          attack_bonus: 7,
          damage_dice: "2d10",
          damage_bonus: 4
        },
        {
          monster_id: 212,
          name: "Multiattack",
          desc:
            "The oni makes two attacks, either with its claws or its glaive."
        },
        {
          monster_id: 213,
          name: "Greataxe",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d12",
          damage_bonus: 3
        },
        {
          monster_id: 213,
          name: "Javelin",
          desc:
            "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 214,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured.",
          attack_bonus: 6,
          damage_dice: "2d8",
          damage_bonus: 3
        },
        {
          monster_id: 214,
          name: "Multiattack",
          desc:
            "The otyugh makes three attacks: one with its bite and two with its tentacles."
        },
        {
          monster_id: 214,
          name: "Tentacle",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target.",
          attack_bonus: 6,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 214,
          name: "Tentacle Slam",
          desc:
            "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned."
        },
        {
          monster_id: 215,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
          attack_bonus: 3,
          damage_bonus: 1
        },
        {
          monster_id: 216,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.",
          attack_bonus: 7,
          damage_dice: "1d10",
          damage_bonus: 5
        },
        {
          monster_id: 216,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 5
        },
        {
          monster_id: 216,
          name: "Multiattack",
          desc:
            "The owlbear makes two attacks: one with its beak and one with its claws."
        },
        {
          monster_id: 217,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 217,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 218,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 219,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
          attack_bonus: 4,
          damage_dice: "1d10",
          damage_bonus: 2
        },
        {
          monster_id: 220,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 14,
          damage_dice: "4d6",
          damage_bonus: 8
        },
        {
          monster_id: 220,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10 ft. , one target. Hit: 17 (2d8 + 8) slashing damage.",
          attack_bonus: 14,
          damage_dice: "2d8",
          damage_bonus: 8
        },
        {
          monster_id: 220,
          name: "Mace",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage.",
          attack_bonus: 14,
          damage_dice: "2d6",
          damage_bonus: 8
        },
        {
          monster_id: 220,
          name: "Multiattack",
          desc:
            "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
        },
        {
          monster_id: 220,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 24 (3d1O + 8) bludgeoning damage.",
          attack_bonus: 14,
          damage_dice: "3d10",
          damage_bonus: 8
        },
        {
          monster_id: 221,
          name: "Greatsword",
          desc:
            "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage.",
          attack_bonus: 12,
          damage_dice: "4d6 + 5d8",
          damage_bonus: 7
        },
        {
          monster_id: 221,
          name: "Healing Touch (4/Day)",
          desc:
            "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
        },
        {
          monster_id: 221,
          name: "Multiattack",
          desc: "The planetar makes two melee attacks."
        },
        {
          monster_id: 222,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "3d6",
          damage_bonus: 4
        },
        {
          monster_id: 223,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 5,
          damage_bonus: 1
        },
        {
          monster_id: 224,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
          attack_bonus: 7,
          damage_dice: "1d8",
          damage_bonus: 5
        },
        {
          monster_id: 224,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 5
        },
        {
          monster_id: 224,
          name: "Multiattack",
          desc:
            "The bear makes two attacks: one with its bite and one with its claws."
        },
        {
          monster_id: 225,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
          attack_bonus: 4,
          damage_dice: "2d4",
          damage_bonus: 2
        },
        {
          monster_id: 226,
          name: "Mace",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage.",
          attack_bonus: 2,
          damage_dice: "1d6"
        },
        {
          monster_id: 227,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 227,
          name: "Sting",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 228,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns. If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.",
          attack_bonus: 9,
          damage_dice: "3d8",
          damage_bonus: 9
        },
        {
          monster_id: 228,
          name: "Multiattack",
          desc:
            "The worm makes two attacks: one with its bite and one with its stinger."
        },
        {
          monster_id: 228,
          name: "Tail Stinger",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 9,
          damage_dice: "3d6",
          damage_bonus: 9
        },
        {
          monster_id: 229,
          name: "Claw (Bite in Beast Form)",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 3
        },
        {
          monster_id: 229,
          name: "Invisibility",
          desc:
            "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
        },
        {
          monster_id: 229,
          name: "Scare (1/day)",
          desc:
            "One creature of the quasit's choice within 20 ft. of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."
        },
        {
          monster_id: 230,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
          attack_bonus: 5,
          damage_bonus: 1
        },
        {
          monster_id: 231,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 2
        },
        {
          monster_id: 231,
          name: "Multiattack",
          desc: "The rakshasa makes two claw attacks"
        },
        {
          monster_id: 232,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
          damage_bonus: 1
        },
        {
          monster_id: 233,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
        },
        {
          monster_id: 234,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage.",
          attack_bonus: 6,
          damage_dice: "1d10 + 1d6",
          damage_bonus: 4
        },
        {
          monster_id: 234,
          name: "Fire Breath (Recharge 5-6)",
          desc:
            "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC l3 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "7d6"
        },
        {
          monster_id: 235,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 236,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target.",
          attack_bonus: 11,
          damage_dice: "6d10 + 3d6",
          damage_bonus: 7
        },
        {
          monster_id: 236,
          name: "Swallow",
          desc:
            "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns. If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
        },
        {
          monster_id: 237,
          name: "Gore",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 5
        },
        {
          monster_id: 238,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
          attack_bonus: 5,
          damage_dice: "2d4",
          damage_bonus: 3
        },
        {
          monster_id: 239,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing damage.",
          attack_bonus: 13,
          damage_dice: "4d8",
          damage_bonus: 9
        },
        {
          monster_id: 239,
          name: "Multiattack",
          desc:
            "The roc makes two attacks: one with its beak and one with its talons."
        },
        {
          monster_id: 239,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target.",
          attack_bonus: 13,
          damage_dice: "4d6",
          damage_bonus: 9
        },
        {
          monster_id: 240,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "4d8",
          damage_bonus: 4
        },
        {
          monster_id: 240,
          name: "Multiattack",
          desc:
            "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
        },
        {
          monster_id: 240,
          name: "Reel",
          desc:
            "The roper pulls each creature grappled by it up to 25 ft. straight toward it."
        },
        {
          monster_id: 240,
          name: "Tendril",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target.",
          attack_bonus: 7
        },
        {
          monster_id: 241,
          name: "Smother",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage.",
          attack_bonus: 0,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 242,
          name: "Antennae",
          desc:
            "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch. If the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait."
        },
        {
          monster_id: 242,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d8",
          damage_bonus: 1
        },
        {
          monster_id: 243,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d10",
          damage_bonus: 5
        },
        {
          monster_id: 243,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 5
        },
        {
          monster_id: 244,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d4",
          damage_bonus: 1
        },
        {
          monster_id: 244,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage.",
          attack_bonus: 3,
          damage_dice: "1d4",
          damage_bonus: 1
        },
        {
          monster_id: 244,
          name: "Multiattack",
          desc:
            "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear."
        },
        {
          monster_id: 244,
          name: "Spear",
          desc:
            "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 245,
          name: "Multiattack",
          desc:
            "The salamander makes two attacks: one with its spear and one with its tail."
        },
        {
          monster_id: 245,
          name: "Spear",
          desc:
            "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 245,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.",
          attack_bonus: 7,
          damage_dice: "2d6 + 2d6",
          damage_bonus: 4
        },
        {
          monster_id: 246,
          name: "Ram",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) bludgeoning damage.",
          attack_bonus: 3,
          damage_dice: "2d4",
          damage_bonus: 1
        },
        {
          monster_id: 246,
          name: "Shortbow",
          desc:
            "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 246,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1 d6 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 246,
          name: "Variant: Panpipes",
          desc:
            "Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake."
        },
        {
          monster_id: 247,
          name: "Sting",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 2,
          damage_bonus: 1
        },
        {
          monster_id: 248,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 248,
          name: "Multiattack",
          desc: "The scout makes two melee attacks or two ranged attacks."
        },
        {
          monster_id: 248,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 249,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 249,
          name: "Death Glare",
          desc:
            "The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
        },
        {
          monster_id: 249,
          name: "Illusory Appearance",
          desc:
            "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies. The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
        },
        {
          monster_id: 251,
          name: "Strength Drain",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest. If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later.",
          attack_bonus: 4,
          damage_dice: "2d6",
          damage_bonus: 2
        },
        {
          monster_id: 252,
          name: "Engulf",
          desc:
            "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
        },
        {
          monster_id: 252,
          name: "Multiattack",
          desc:
            "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
        },
        {
          monster_id: 252,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 253,
          name: "Fist",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 253,
          name: "Multiattack",
          desc: "The guardian makes two fist attacks."
        },
        {
          monster_id: 254,
          name: "Shriek",
          desc:
            "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward"
        },
        {
          monster_id: 255,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
          attack_bonus: 6,
          damage_dice: "1d10",
          damage_bonus: 4
        },
        {
          monster_id: 255,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Cold Breath.** The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one. **Paralyzing Breath.** The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "4d8"
        },
        {
          monster_id: 256,
          name: "Shortbow",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 256,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 257,
          name: "Flying Sword",
          desc:
            "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
        },
        {
          monster_id: 257,
          name: "Greatsword",
          desc:
            "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.",
          attack_bonus: 15,
          damage_dice: "4d6 + 6d8",
          damage_bonus: 8
        },
        {
          monster_id: 257,
          name: "Healing Touch (4/Day)",
          desc:
            "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
        },
        {
          monster_id: 257,
          name: "Multiattack",
          desc: "The solar makes two greatsword attacks."
        },
        {
          monster_id: 257,
          name: "Slaying Longbow",
          desc:
            "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
          attack_bonus: 13,
          damage_dice: "2d8 + 6d8",
          damage_bonus: 6
        },
        {
          monster_id: 258,
          name: "Life Drain",
          desc:
            "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
          attack_bonus: 4,
          damage_dice: "3d6"
        },
        {
          monster_id: 259,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
          attack_bonus: 4,
          damage_bonus: 1
        },
        {
          monster_id: 260,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 7,
          damage_dice: "1d6",
          damage_bonus: 4
        },
        {
          monster_id: 261,
          name: "Heart Sight",
          desc:
            "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw."
        },
        {
          monster_id: 261,
          name: "Invisibility",
          desc:
            "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it."
        },
        {
          monster_id: 261,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
          attack_bonus: 2,
          damage_bonus: 1
        },
        {
          monster_id: 261,
          name: "Shortbow",
          desc:
            "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.",
          attack_bonus: 6,
          damage_bonus: 1
        },
        {
          monster_id: 262,
          name: "Hand Crossbow",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 262,
          name: "Multiattack",
          desc: "The spy makes two melee attacks."
        },
        {
          monster_id: 262,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 263,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage.",
          attack_bonus: 2,
          damage_dice: "2d4"
        },
        {
          monster_id: 263,
          name: "Steam Breath (Recharge 6)",
          desc:
            "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          monster_id: 263,
          name: "Variant: Summon Mephits (1/Day)",
          desc:
            "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 264,
          name: "Blood Drain",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss. The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.",
          attack_bonus: 5,
          damage_dice: "1d4",
          damage_bonus: 3
        },
        {
          monster_id: 265,
          name: "Greatclub",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
          attack_bonus: 9,
          damage_dice: "3d8",
          damage_bonus: 6
        },
        {
          monster_id: 265,
          name: "Multiattack",
          desc: "The giant makes two greatclub attacks."
        },
        {
          monster_id: 265,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
          attack_bonus: 9,
          damage_dice: "4d10",
          damage_bonus: 6
        },
        {
          monster_id: 266,
          name: "Multiattack",
          desc: "The golem makes two slam attacks."
        },
        {
          monster_id: 266,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
          attack_bonus: 10,
          damage_dice: "3d8",
          damage_bonus: 6
        },
        {
          monster_id: 266,
          name: "Slow (Recharge 5-6)",
          desc:
            "The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          monster_id: 267,
          name: "Greatsword",
          desc:
            "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) slashing damage.",
          attack_bonus: 14,
          damage_dice: "6d6",
          damage_bonus: 9
        },
        {
          monster_id: 267,
          name: "Lightning Strike (Recharge 5-6)",
          desc:
            "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "12d8"
        },
        {
          monster_id: 267,
          name: "Multiattack",
          desc: "The giant makes two greatsword attacks."
        },
        {
          monster_id: 267,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) bludgeoning damage.",
          attack_bonus: 14,
          damage_dice: "4d12",
          damage_bonus: 9
        },
        {
          monster_id: 268,
          name: "Charm",
          desc:
            "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours. The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends."
        },
        {
          monster_id: 268,
          name: "Claw (Fiend Form Only)",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 268,
          name: "Draining Kiss",
          desc:
            "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
          attack_bonus: 0,
          damage_dice: "5d10",
          damage_bonus: 5
        },
        {
          monster_id: 268,
          name: "Etherealness",
          desc:
            "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
        },
        {
          monster_id: 269,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 4,
          damage_dice: "2d4"
        },
        {
          monster_id: 270,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 3,
          damage_dice: "4d4"
        },
        {
          monster_id: 271,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer. A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way.",
          attack_bonus: 3,
          damage_dice: "4d4"
        },
        {
          monster_id: 272,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 3,
          damage_dice: "4d4"
        },
        {
          monster_id: 273,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 6,
          damage_dice: "2d6"
        },
        {
          monster_id: 274,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 5,
          damage_dice: "4d6"
        },
        {
          monster_id: 275,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 2,
          damage_dice: "2d6"
        },
        {
          monster_id: 276,
          name: "Beaks",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 4,
          damage_dice: "2d6"
        },
        {
          monster_id: 277,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 3,
          damage_dice: "4d4"
        },
        {
          monster_id: 278,
          name: "Bites",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
          attack_bonus: 3,
          damage_dice: "4d4"
        },
        {
          monster_id: 279,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.",
          attack_bonus: 19,
          damage_dice: "4d12",
          damage_bonus: 10
        },
        {
          monster_id: 279,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage.",
          attack_bonus: 19,
          damage_dice: "4d8",
          damage_bonus: 10
        },
        {
          monster_id: 279,
          name: "Frightful Presence",
          desc:
            "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
        },
        {
          monster_id: 279,
          name: "Horns",
          desc:
            "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage.",
          attack_bonus: 19,
          damage_dice: "4d10",
          damage_bonus: 10
        },
        {
          monster_id: 279,
          name: "Multiattack",
          desc:
            "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tai l. It can use its Swallow instead of its bite."
        },
        {
          monster_id: 279,
          name: "Swallow",
          desc:
            "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns. If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
        },
        {
          monster_id: 279,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.",
          attack_bonus: 19,
          damage_dice: "4d6",
          damage_bonus: 10
        },
        {
          monster_id: 280,
          name: "Heavy Crossbow",
          desc:
            "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.",
          attack_bonus: 2,
          damage_dice: "1d10"
        },
        {
          monster_id: 280,
          name: "Mace",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 280,
          name: "Multiattack",
          desc: "The thug makes two melee attacks."
        },
        {
          monster_id: 281,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d10",
          damage_bonus: 3
        },
        {
          monster_id: 281,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
        },
        {
          monster_id: 282,
          name: "Animate Trees (1/Day)",
          desc:
            "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible."
        },
        {
          monster_id: 282,
          name: "Multiattack",
          desc: "The treant makes two slam attacks."
        },
        {
          monster_id: 282,
          name: "Rock",
          desc:
            "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.",
          attack_bonus: 10,
          damage_dice: "4d10",
          damage_bonus: 6
        },
        {
          monster_id: 282,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage.",
          attack_bonus: 10,
          damage_dice: "3d6",
          damage_bonus: 6
        },
        {
          monster_id: 283,
          name: "Spear",
          desc:
            "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        },
        {
          monster_id: 284,
          name: "Gore",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.",
          attack_bonus: 9,
          damage_dice: "4d8",
          damage_bonus: 6
        },
        {
          monster_id: 284,
          name: "Stomp",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage",
          attack_bonus: 9,
          damage_dice: "3d10",
          damage_bonus: 6
        },
        {
          monster_id: 285,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "1d6",
          damage_bonus: 4
        },
        {
          monster_id: 285,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 285,
          name: "Multiattack",
          desc:
            "The troll makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 286,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target.",
          attack_bonus: 10,
          damage_dice: "4d12",
          damage_bonus: 7
        },
        {
          monster_id: 286,
          name: "Multiattack",
          desc:
            "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
        },
        {
          monster_id: 286,
          name: "Tail",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
          attack_bonus: 10,
          damage_dice: "3d8",
          damage_bonus: 7
        },
        {
          monster_id: 287,
          name: "Healing Touch (3/Day)",
          desc:
            "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
        },
        {
          monster_id: 287,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 287,
          name: "Horn",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 8 (1d8 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 287,
          name: "Multiattack",
          desc:
            "The unicorn makes two attacks: one with its hooves and one with its horn."
        },
        {
          monster_id: 287,
          name: "Teleport (1/Day)",
          desc:
            "The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
        },
        {
          monster_id: 288,
          name: "Bite (Bat or Vampire Form Only)",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
          attack_bonus: 9,
          damage_dice: "1d6 + 3d6",
          damage_bonus: 4
        },
        {
          monster_id: 288,
          name: "Charm",
          desc:
            "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack. Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
        },
        {
          monster_id: 288,
          name: "Children of the Night (1/Day)",
          desc:
            "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
        },
        {
          monster_id: 288,
          name: "Multiattack (Vampire Form Only)",
          desc:
            "The vampire makes two attacks, only one of which can be a bite attack."
        },
        {
          monster_id: 288,
          name: "Unarmed Strike (Vampire Form Only)",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
          attack_bonus: 9,
          damage_dice: "1d8",
          damage_bonus: 4
        },
        {
          monster_id: 289,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
          attack_bonus: 61
        },
        {
          monster_id: 289,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13).",
          attack_bonus: 6,
          damage_dice: "2d4",
          damage_bonus: 3
        },
        {
          monster_id: 289,
          name: "Multiattack",
          desc:
            "The vampire makes two attacks, only one of which can be a bite attack."
        },
        {
          monster_id: 290,
          name: "Heavy Crossbow",
          desc:
            "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.",
          attack_bonus: 3,
          damage_dice: "1d10",
          damage_bonus: 1
        },
        {
          monster_id: 290,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 290,
          name: "Multiattack",
          desc:
            "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
        },
        {
          monster_id: 290,
          name: "Shortsword",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 291,
          name: "Multiattack",
          desc: "The fungus makes 1d4 Rotting Touch attacks."
        },
        {
          monster_id: 291,
          name: "Rotting Touch",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage.",
          attack_bonus: 2,
          damage_dice: "1d8"
        },
        {
          monster_id: 292,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 292,
          name: "Multiattack",
          desc:
            "The vrock makes two attacks: one with its beak and one with its talons."
        },
        {
          monster_id: 292,
          name: "Spores (Recharge 6)",
          desc:
            "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."
        },
        {
          monster_id: 292,
          name: "Stunning Screech (1/Day)",
          desc:
            "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn ."
        },
        {
          monster_id: 292,
          name: "Talons",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.",
          attack_bonus: 6,
          damage_dice: "2d10",
          damage_bonus: 3
        },
        {
          monster_id: 292,
          name: "Variant: Summon Demon (1/Day)",
          desc:
            "The demon chooses what to summon and attempts a magical summoning. A vrock has a 30 percent chance of summoning 2d4 dretches or one vrock. A summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action."
        },
        {
          monster_id: 293,
          name: "Beak",
          desc:
            "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
          attack_bonus: 2,
          damage_dice: "1d4"
        },
        {
          monster_id: 294,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 295,
          name: "Hooves",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 296,
          name: "Multiattack",
          desc: "The elemental makes two slam attacks."
        },
        {
          monster_id: 296,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 296,
          name: "Whelm (Recharge 4-6)",
          desc:
            "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space. The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
        },
        {
          monster_id: 297,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
          attack_bonus: 5,
          damage_bonus: 1
        },
        {
          monster_id: 298,
          name: "Bite (Bear or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with were bear lycanthropy.",
          attack_bonus: 7,
          damage_dice: "2d10",
          damage_bonus: 4
        },
        {
          monster_id: 298,
          name: "Claw (Bear or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 298,
          name: "Greataxe (Humanoid or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "1d12",
          damage_bonus: 4
        },
        {
          monster_id: 298,
          name: "Multiattack",
          desc:
            "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
        },
        {
          monster_id: 299,
          name: "Maul (Humanoid or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 299,
          name: "Multiattack (Humanoid or Hybrid Form Only)",
          desc:
            "The wereboar makes two attacks, only one of which can be with its tusks."
        },
        {
          monster_id: 299,
          name: "Tusks (Boar or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 300,
          name: "Bite (Rat or Hybrid Form Only).",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy.",
          attack_bonus: 4,
          damage_dice: "1d4",
          damage_bonus: 2
        },
        {
          monster_id: 300,
          name: "Hand Crossbow (Humanoid or Hybrid Form Only)",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 300,
          name: "Multiattack (Humanoid or Hybrid Form Only)",
          desc:
            "The wererat makes two attacks, only one of which can be a bite."
        },
        {
          monster_id: 300,
          name: "Shortsword (Humanoid or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 301,
          name: "Bite (Tiger or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy.",
          attack_bonus: 5,
          damage_dice: "1d10",
          damage_bonus: 3
        },
        {
          monster_id: 301,
          name: "Claw (Tiger or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d8",
          damage_bonus: 3
        },
        {
          monster_id: 301,
          name: "Longbow (Humanoid or Hybrid Form Only)",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 301,
          name: "Multiattack (Humanoid or Hybrid Form Only)",
          desc:
            "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
        },
        {
          monster_id: 301,
          name: "Scimitar (Humanoid or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
          attack_bonus: 5,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 302,
          name: "Bite (Wolf or Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 302,
          name: "Claws (Hybrid Form Only)",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage.",
          attack_bonus: 4,
          damage_dice: "2d4",
          damage_bonus: 2
        },
        {
          monster_id: 302,
          name: "Multiattack (Humanoid or Hybrid Form Only)",
          desc:
            "The werewolf makes two attacks: one with its bite and one with its claws or spear."
        },
        {
          monster_id: 302,
          name: "Spear (Humanoid Form Only)",
          desc:
            "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: -2
        },
        {
          monster_id: 303,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage.",
          attack_bonus: 4,
          damage_dice: "1d10 + 1d4",
          damage_bonus: 2
        },
        {
          monster_id: 303,
          name: "Cold Breath (Recharge 5-6)",
          desc:
            "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "5d8"
        },
        {
          monster_id: 304,
          name: "Life Drain",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
          attack_bonus: 4,
          damage_dice: "1d6",
          damage_bonus: 2
        },
        {
          monster_id: 304,
          name: "Longbow",
          desc:
            "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 304,
          name: "Longsword",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands.",
          attack_bonus: 4,
          damage_dice: "1d8",
          damage_bonus: 2
        },
        {
          monster_id: 304,
          name: "Multiattack",
          desc:
            "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
        },
        {
          monster_id: 305,
          name: "Invisibility",
          desc:
            "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
        },
        {
          monster_id: 305,
          name: "Shock",
          desc:
            "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage.",
          attack_bonus: 4,
          damage_dice: "2d8"
        },
        {
          monster_id: 306,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
          attack_bonus: 6,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 306,
          name: "Cold Breath (Recharge 5-6)",
          desc:
            "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "4d8"
        },
        {
          monster_id: 307,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
          attack_bonus: 4,
          damage_dice: "2d4",
          damage_bonus: 2
        },
        {
          monster_id: 308,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
          attack_bonus: 5,
          damage_dice: "2d6",
          damage_bonus: 3
        },
        {
          monster_id: 309,
          name: "Create Specter",
          desc:
            "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time."
        },
        {
          monster_id: 309,
          name: "Life Drain",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
          attack_bonus: 6,
          damage_dice: "4d8",
          damage_bonus: 3
        },
        {
          monster_id: 310,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 310,
          name: "Claws",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d8",
          damage_bonus: 4
        },
        {
          monster_id: 310,
          name: "Multiattack",
          desc:
            "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
        },
        {
          monster_id: 310,
          name: "Stinger",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 311,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage.",
          attack_bonus: 6,
          damage_dice: "3d6",
          damage_bonus: 3
        },
        {
          monster_id: 311,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
          attack_bonus: 6,
          damage_dice: "1d6",
          damage_bonus: 3
        },
        {
          monster_id: 311,
          name: "Multiattack",
          desc: "The xorn makes three claw attacks and one bite attack."
        },
        {
          monster_id: 312,
          name: "Acid Breath (Recharge 5-6)",
          desc:
            "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "11d8"
        },
        {
          monster_id: 312,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage.",
          attack_bonus: 7,
          damage_dice: "2d10 + 1d8",
          damage_bonus: 4
        },
        {
          monster_id: 312,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 312,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 313,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage.",
          attack_bonus: 9,
          damage_dice: "2d10 + 1d10",
          damage_bonus: 5
        },
        {
          monster_id: 313,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
          attack_bonus: 9,
          damage_dice: "2d6",
          damage_bonus: 5
        },
        {
          monster_id: 313,
          name: "Lightning Breath (Recharge 5-6)",
          desc:
            "The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "10d10"
        },
        {
          monster_id: 313,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 314,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "2d10",
          damage_bonus: 4
        },
        {
          monster_id: 314,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Fire Breath.** The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one. **Sleep Breath.** The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
          attack_bonus: 0,
          damage_dice: "12d6"
        },
        {
          monster_id: 314,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 314,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 315,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage.",
          attack_bonus: 8,
          damage_dice: "2d10",
          damage_bonus: 5
        },
        {
          monster_id: 315,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Lightning Breath.** The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one. **Repulsion Breath.** The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon.",
          attack_bonus: 0,
          damage_dice: "10d10"
        },
        {
          monster_id: 315,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
          attack_bonus: 8,
          damage_dice: "2d6",
          damage_bonus: 5
        },
        {
          monster_id: 315,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 316,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
          attack_bonus: 7,
          damage_dice: "2d10",
          damage_bonus: 4
        },
        {
          monster_id: 316,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Acid Breath.** The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one. **Slowing Breath.** The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
          attack_bonus: 0,
          damage_dice: "9d8"
        },
        {
          monster_id: 316,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 316,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 317,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
          attack_bonus: 10,
          damage_dice: "2d10",
          damage_bonus: 6
        },
        {
          monster_id: 317,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Fire Breath.** The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one. **Weakening Breath.** The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "10d10"
        },
        {
          monster_id: 317,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 10,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 317,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 318,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage.",
          attack_bonus: 7,
          damage_dice: "2d10 + 2d6",
          damage_bonus: 4
        },
        {
          monster_id: 318,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 318,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 318,
          name: "Poison Breath (Recharge 5-6)",
          desc:
            "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "12d6"
        },
        {
          monster_id: 319,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage.",
          attack_bonus: 10,
          damage_dice: "2d10 + 1d6",
          damage_bonus: 6
        },
        {
          monster_id: 319,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 10,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 319,
          name: "Fire Breath (Recharge 5-6)",
          desc:
            "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "16d6"
        },
        {
          monster_id: 319,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 320,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
          attack_bonus: 10,
          damage_dice: "2d10",
          damage_bonus: 6
        },
        {
          monster_id: 320,
          name: "Breath Weapons (Recharge 5-6)",
          desc:
            "The dragon uses one of the following breath weapons. **Cold Breath.** The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one. **Paralyzing Breath.** The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
          attack_bonus: 0,
          damage_dice: "12d8"
        },
        {
          monster_id: 320,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
          attack_bonus: 10,
          damage_dice: "2d6",
          damage_bonus: 6
        },
        {
          monster_id: 320,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 321,
          name: "Bite",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage.",
          attack_bonus: 7,
          damage_dice: "2d10 + 1d8",
          damage_bonus: 4
        },
        {
          monster_id: 321,
          name: "Claw",
          desc:
            "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
          attack_bonus: 7,
          damage_dice: "2d6",
          damage_bonus: 4
        },
        {
          monster_id: 321,
          name: "Cold Breath (Recharge 5-6)",
          desc:
            "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "10d8"
        },
        {
          monster_id: 321,
          name: "Multiattack",
          desc:
            "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          monster_id: 322,
          name: "Slam",
          desc:
            "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
          attack_bonus: 3,
          damage_dice: "1d6",
          damage_bonus: 1
        }
      ]);
    });
};
