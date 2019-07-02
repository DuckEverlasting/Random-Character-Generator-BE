exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("legendary_actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("legendary_actions").insert([
        {
          monster_id: 1,
          name: "Detect",
          desc: "The aboleth makes a Wisdom (Perception) check."
        },
        {
          monster_id: 1,
          name: "Psychic Drain (Costs 2 Actions)",
          desc:
            "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
        },
        {
          monster_id: 1,
          name: "Tail Swipe",
          desc: "The aboleth makes one tail attack."
        },
        {
          monster_id: 3,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 3,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 3,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 4,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 4,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 4,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 5,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 5,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 5,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 6,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 6,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 6,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 7,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 7,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 7,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 8,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 8,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 8,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 9,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 9,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 9,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 10,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 10,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 10,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 11,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 11,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 11,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 12,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 12,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 12,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 14,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 14,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 14,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 15,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 15,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 15,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 16,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 16,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 16,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 17,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 17,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 17,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 18,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 18,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 18,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 19,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 19,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 19,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 20,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 20,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 20,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 21,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 21,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 21,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 22,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 22,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 22,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 23,
          name: "Detect",
          desc: "The dragon makes a Wisdom (Perception) check."
        },
        {
          monster_id: 23,
          name: "Tail Attack",
          desc: "The dragon makes a tail attack."
        },
        {
          monster_id: 23,
          name: "Wing Attack (Costs 2 Actions)",
          desc:
            "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        },
        {
          monster_id: 24,
          name: "Cast a Spell (Costs 3 Actions)",
          desc:
            "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
        },
        {
          monster_id: 24,
          name: "Claw Attack",
          desc: "The sphinx makes one claw attack."
        },
        {
          monster_id: 24,
          name: "Teleport (Costs 2 Actions)",
          desc:
            "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          monster_id: 158,
          name: "Cast a Spell (Costs 3 Actions)",
          desc:
            "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
        },
        {
          monster_id: 158,
          name: "Claw Attack",
          desc: "The sphinx makes one claw attack."
        },
        {
          monster_id: 158,
          name: "Teleport (Costs 2 Actions)",
          desc:
            "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          monster_id: 181,
          name: "Ink Cloud (Costs 3 Actions)",
          desc:
            "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
        },
        {
          monster_id: 181,
          name: "Lightning Storm (Costs 2 Actions)",
          desc: "The kraken uses Lightning Storm."
        },
        {
          monster_id: 181,
          name: "Tentacle Attack or Fling",
          desc: "The kraken makes one tentacle attack or uses its Fling."
        },
        {
          monster_id: 184,
          name: "Cantrip",
          desc: "The lich casts a cantrip."
        },
        {
          monster_id: 184,
          name: "Disrupt Life (Costs 3 Actions)",
          desc:
            "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "6d6"
        },
        {
          monster_id: 184,
          name: "Frightening Gaze (Costs 2 Actions)",
          desc:
            "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
        },
        {
          monster_id: 184,
          name: "Paralyzing Touch (Costs 2 Actions)",
          desc: "The lich uses its Paralyzing Touch."
        },
        {
          monster_id: 203,
          name: "Attack",
          desc:
            "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare."
        },
        {
          monster_id: 203,
          name: "Blasphemous Word (Costs 2 Actions)",
          desc:
            "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn."
        },
        {
          monster_id: 203,
          name: "Blinding Dust",
          desc:
            "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn."
        },
        {
          monster_id: 203,
          name: "Channel Negative Energy (Costs 2 Actions)",
          desc:
            "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn."
        },
        {
          monster_id: 203,
          name: "Whirlwind of Sand (Costs 2 Actions)",
          desc:
            "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession."
        },
        {
          monster_id: 257,
          name: "Blinding Gaze (Costs 3 Actions)",
          desc:
            "The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."
        },
        {
          monster_id: 257,
          name: "Searing Burst (Costs 2 Actions)",
          desc:
            "The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."
        },
        {
          monster_id: 257,
          name: "Teleport",
          desc:
            "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see."
        },
        {
          monster_id: 279,
          name: "Attack",
          desc: "The tarrasque makes one claw attack or tail attack."
        },
        {
          monster_id: 279,
          name: "Chomp (Costs 2 Actions)",
          desc: "The tarrasque makes one bite attack or uses its Swallow."
        },
        {
          monster_id: 279,
          name: "Move",
          desc: "The tarrasque moves up to half its speed."
        },
        {
          monster_id: 287,
          name: "Heal Self (Costs 3 Actions)",
          desc: "The unicorn magically regains 11 (2d8 + 2) hit points."
        },
        {
          monster_id: 287,
          name: "Hooves",
          desc: "The unicorn makes one attack with its hooves."
        },
        {
          monster_id: 287,
          name: "Shimmering Shield (Costs 2 Actions)",
          desc:
            "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn."
        },
        {
          monster_id: 288,
          name: "Bite (Costs 2 Actions)",
          desc: "The vampire makes one bite attack."
        },
        {
          monster_id: 288,
          name: "Move",
          desc:
            "The vampire moves up to its speed without provoking opportunity attacks."
        },
        {
          monster_id: 288,
          name: "Unarmed Strike",
          desc: "The vampire makes one unarmed strike."
        }
      ]);
    });
};
