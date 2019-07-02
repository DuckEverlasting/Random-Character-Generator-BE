exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("special_abilities")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("special_abilities").insert([
        {
          monster_id: 1,
          name: "Amphibious",
          desc: "The aboleth can breathe air and water."
        },
        {
          monster_id: 1,
          name: "Mucous Cloud",
          desc:
            "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
        },
        {
          monster_id: 1,
          name: "Probing Telepathy",
          desc:
            "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
        },
        {
          monster_id: 2,
          name: "Spellcasting",
          desc:
            "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:  • Cantrips (at will): light, sacred flame, thaumaturgy • 1st level (3 slots): bless, cure wounds, sanctuary"
        },
        {
          monster_id: 3,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 3,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 4,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 5,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 6,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 6,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 7,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 8,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 8,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 9,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 9,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 10,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 11,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 12,
          name: "Ice Walk",
          desc:
            "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
        },
        {
          monster_id: 12,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 13,
          name: "Air Form",
          desc:
            "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          monster_id: 14,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 14,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 15,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 16,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 17,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 17,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 18,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 19,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 19,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 20,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 20,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 21,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 22,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 23,
          name: "Ice Walk",
          desc:
            "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
        },
        {
          monster_id: 23,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 24,
          name: "Inscrutable",
          desc:
            "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
        },
        {
          monster_id: 24,
          name: "Magic Weapons",
          desc: "The sphinx's weapon attacks are magical."
        },
        {
          monster_id: 24,
          name: "Spellcasting",
          desc:
            "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:  • Cantrips (at will): sacred flame, spare the dying, thaumaturgy • 1st level (4 slots): command, detect evil and good, detect magic • 2nd level (3 slots): lesser restoration, zone of truth • 3rd level (3 slots): dispel magic, tongues • 4th level (3 slots): banishment, freedom of movement • 5th level (2 slots): flame strike, greater restoration • 6th level (1 slot): heroes' feast"
        },
        {
          monster_id: 25,
          name: "Antimagic Susceptibility",
          desc:
            "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
        },
        {
          monster_id: 25,
          name: "False Appearance",
          desc:
            "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
        },
        {
          monster_id: 28,
          name: "Magic Resistance",
          desc:
            "The archmage has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 28,
          name: "Spellcasting",
          desc:
            "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:  • Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp • 1st level (4 slots): detect magic, identify, mage armor*, magic missile • 2nd level (3 slots): detect thoughts, mirror image, misty step • 3rd level (3 slots): counterspell,fly, lightning bolt • 4th level (3 slots): banishment, fire shield, stoneskin* • 5th level (3 slots): cone of cold, scrying, wall of force • 6th level (1 slot): globe of invulnerability • 7th level (1 slot): teleport • 8th level (1 slot): mind blank* • 9th level (1 slot): time stop * The archmage casts these spells on itself before combat."
        },
        {
          monster_id: 29,
          name: "Assassinate",
          desc:
            "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
        },
        {
          monster_id: 29,
          name: "Evasion",
          desc:
            "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
        },
        {
          monster_id: 29,
          name: "Sneak Attack (1/Turn)",
          desc:
            "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.",
          attack_bonus: 0,
          damage_dice: "4d6"
        },
        {
          monster_id: 30,
          name: "False Appearance",
          desc:
            "While the shrub remains motionless, it is indistinguishable from a normal shrub."
        },
        {
          monster_id: 31,
          name: "False Appearance",
          desc:
            "While the tree remains motionless, it is indistinguishable from a normal tree."
        },
        {
          monster_id: 33,
          name: "Heated Body",
          desc:
            "A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage.",
          attack_bonus: 0,
          damage_dice: "1d10"
        },
        {
          monster_id: 33,
          name: "Heated Weapons",
          desc:
            "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
        },
        {
          monster_id: 33,
          name: "Illumination",
          desc:
            "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
        },
        {
          monster_id: 34,
          name: "Pack Tactics",
          desc:
            "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 35,
          name: "Keen Smell",
          desc:
            "The badger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 36,
          name: "Death Throes",
          desc:
            "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.",
          attack_bonus: 0,
          damage_dice: "20d6"
        },
        {
          monster_id: 36,
          name: "Fire Aura",
          desc:
            "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
          attack_bonus: 0,
          damage_dice: "3d6"
        },
        {
          monster_id: 36,
          name: "Magic Resistance",
          desc:
            "The balor has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 36,
          name: "Magic Weapons",
          desc: "The balor's weapon attacks are magical."
        },
        {
          monster_id: 39,
          name: "Barbed Hide",
          desc:
            "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.",
          attack_bonus: 0,
          damage_dice: "1d10"
        },
        {
          monster_id: 39,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          monster_id: 39,
          name: "Magic Resistance",
          desc:
            "The devil has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 40,
          name: "Petrifying Gaze",
          desc:
            "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic. A creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
        },
        {
          monster_id: 41,
          name: "Echolocation",
          desc: "The bat can't use its blindsight while deafened."
        },
        {
          monster_id: 41,
          name: "Keen Hearing",
          desc:
            "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        {
          monster_id: 42,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          monster_id: 42,
          name: "Magic Resistance",
          desc:
            "The devil has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 42,
          name: "Steadfast",
          desc:
            "The devil can't be frightened while it can see an allied creature within 30 feet of it."
        },
        {
          monster_id: 44,
          name: "Reckless",
          desc:
            "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
        },
        {
          monster_id: 45,
          name: "Keen Smell",
          desc:
            "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 46,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 47,
          name: "Amorphous",
          desc:
            "The pudding can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          monster_id: 47,
          name: "Corrosive Form",
          desc:
            "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
          attack_bonus: 0,
          damage_dice: "1d8"
        },
        {
          monster_id: 47,
          name: "Spider Climb",
          desc:
            "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 48,
          name: "Keen Hearing and Smell",
          desc:
            "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 49,
          name: "Keen Sight",
          desc:
            "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 49,
          name: "Pack Tactics",
          desc:
            "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 51,
          name: "Charge",
          desc:
            "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "1d6"
        },
        {
          monster_id: 51,
          name: "Relentless (Recharges after a Short or Long Rest)",
          desc:
            "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
        },
        {
          monster_id: 52,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          monster_id: 52,
          name: "Magic Resistance",
          desc:
            "The devil has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 54,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 55,
          name: "Keen Smell",
          desc:
            "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 56,
          name: "Brute",
          desc:
            "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
        },
        {
          monster_id: 56,
          name: "Surprise Attack",
          desc:
            "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 57,
          name: "Standing Leap",
          desc:
            "The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start."
        },
        {
          monster_id: 59,
          name: "Keen Smell",
          desc:
            "The cat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 60,
          name: "Charge",
          desc:
            "If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage.",
          attack_bonus: 0,
          damage_dice: "3d6"
        },
        {
          monster_id: 61,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          monster_id: 61,
          name: "Magic Resistance",
          desc:
            "The devil has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 63,
          name: "Amphibious",
          desc: "The chuul can breathe air and water."
        },
        {
          monster_id: 63,
          name: "Sense Magic",
          desc:
            "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
        },
        {
          monster_id: 64,
          name: "Acid Absorption",
          desc:
            "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
        },
        {
          monster_id: 64,
          name: "Berserk",
          desc:
            "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
        },
        {
          monster_id: 64,
          name: "Immutable Form",
          desc:
            "The golem is immune to any spell or effect that would alter its form."
        },
        {
          monster_id: 64,
          name: "Magic Resistance",
          desc:
            "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 64,
          name: "Magic Weapons",
          desc: "The golem's weapon attacks are magical."
        },
        {
          monster_id: 65,
          name: "Damage Transfer",
          desc:
            "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half."
        },
        {
          monster_id: 65,
          name: "False Appearance",
          desc:
            "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak."
        },
        {
          monster_id: 65,
          name: "Light Sensitivity",
          desc:
            "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 66,
          name: "Innate Spellcasting",
          desc:
            "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:  At will: detect magic, fog cloud, light 3/day each: feather fall, fly, misty step, telekinesis 1/day each: control weather, gaseous form"
        },
        {
          monster_id: 66,
          name: "Keen Smell",
          desc:
            "The giant has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 71,
          name: "Innate Spellcasting",
          desc:
            "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:  At will: detect evil and good, detect magic, detect thoughts 3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield 1/day each: dream, greater restoration, scrying"
        },
        {
          monster_id: 71,
          name: "Magic Weapons",
          desc: "The couatl's weapon attacks are magical."
        },
        {
          monster_id: 71,
          name: "Shielded Mind",
          desc:
            "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
        },
        {
          monster_id: 72,
          name: "Amphibious",
          desc: "The crab can breathe air and water."
        },
        {
          monster_id: 73,
          name: "Hold Breath",
          desc: "The crocodile can hold its breath for 15 minutes."
        },
        {
          monster_id: 74,
          name: "Dark Devotion",
          desc:
            "The fanatic has advantage on saving throws against being charmed or frightened."
        },
        {
          monster_id: 74,
          name: "Spellcasting",
          desc:
            "The fanatic is a 4th-level spellcaster. Its spell casting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:  Cantrips (at will): light, sacred flame, thaumaturgy • 1st level (4 slots): command, inflict wounds, shield of faith • 2nd level (3 slots): hold person, spiritual weapon"
        },
        {
          monster_id: 75,
          name: "Dark Devotion",
          desc:
            "The cultist has advantage on saving throws against being charmed or frightened."
        },
        {
          monster_id: 76,
          name: "Echolocation",
          desc: "The darkmantle can't use its blindsight while deafened."
        },
        {
          monster_id: 76,
          name: "False Appearance",
          desc:
            "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
        },
        {
          monster_id: 77,
          name: "Two-Headed",
          desc:
            "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
        },
        {
          monster_id: 78,
          name: "Gnome Cunning",
          desc:
            "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
        },
        {
          monster_id: 78,
          name: "Innate Spellcasting",
          desc:
            "The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components: At will: nondetection (self only) 1/day each: blindness/deafness, blur, disguise self"
        },
        {
          monster_id: 78,
          name: "Stone Camouflage",
          desc:
            "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        {
          monster_id: 80,
          name: "Angelic Weapons",
          desc:
            "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
        },
        {
          monster_id: 80,
          name: "Innate Spellcasting",
          desc:
            "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components: At will: detect evil and good 1/day each: commune, raise dead"
        },
        {
          monster_id: 80,
          name: "Magic Resistance",
          desc:
            "The deva has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 81,
          name: "Keen Hearing and Smell",
          desc:
            "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 81,
          name: "Pack Tactics",
          desc:
            "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 82,
          name: "Elemental Demise",
          desc:
            "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying."
        },
        {
          monster_id: 82,
          name: "Innate Spellcasting",
          desc:
            "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components:  At will: detect evil and good, detect magic, thunderwave 3/day each: create food and water (can create wine instead of water), tongues, wind walk 1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift"
        },
        {
          monster_id: 82,
          name: "Variant: Genie Powers",
          desc:
            "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.  Disguises. Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well. Wishes. The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence. To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
        },
        {
          monster_id: 83,
          name: "Ambusher",
          desc:
            "The doppelganger has advantage on attack rolls against any creature it has surprised."
        },
        {
          monster_id: 83,
          name: "Shapechanger",
          desc:
            "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 83,
          name: "Surprise Attack",
          desc:
            "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack.",
          attack_bonus: 0,
          damage_dice: "3d6"
        },
        {
          monster_id: 85,
          name: "Amphibious",
          desc: "The dragon turtle can breathe air and water."
        },
        {
          monster_id: 87,
          name: "Fey Ancestry",
          desc:
            "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
        },
        {
          monster_id: 87,
          name: "Innate Spellcasting",
          desc:
            "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components: At will: dancing lights 1/day each: darkness, faerie fire"
        },
        {
          monster_id: 87,
          name: "Spider Climb",
          desc:
            "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 87,
          name: "Sunlight Sensitivity",
          desc:
            "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 87,
          name: "Web Walker",
          desc: "The drider ignores movement restrictions caused by webbing."
        },
        {
          monster_id: 88,
          name: "Fey Ancestry",
          desc:
            "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
        },
        {
          monster_id: 88,
          name: "Innate Spellcasting",
          desc:
            "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components: At will: dancing lights 1/day each: darkness, faerie fire"
        },
        {
          monster_id: 88,
          name: "Sunlight Sensitivity",
          desc:
            "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 89,
          name: "Spellcasting",
          desc:
            "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:  • Cantrips (at will): druidcraft, produce flame, shillelagh • 1st level (4 slots): entangle, longstrider, speak with animals, thunderwave • 2nd level (3 slots): animal messenger, barkskin"
        },
        {
          monster_id: 90,
          name: "Innate Spellcasting",
          desc:
            "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:  At will: druidcraft 3/day each: entangle, goodberry 1/day each: barkskin, pass without trace, shillelagh"
        },
        {
          monster_id: 90,
          name: "Magic Resistance",
          desc:
            "The dryad has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 90,
          name: "Speak with Beasts and Plants",
          desc:
            "The dryad can communicate with beasts and plants as if they shared a language."
        },
        {
          monster_id: 90,
          name: "Tree Stride",
          desc:
            "Once on her turn, the dryad can use 10 ft. of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 ft. of the first tree, appearing in an unoccupied space within 5 ft. of the second tree. Both trees must be large or bigger."
        },
        {
          monster_id: 91,
          name: "Duergar Resilience",
          desc:
            "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
        },
        {
          monster_id: 91,
          name: "Sunlight Sensitivity",
          desc:
            "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 92,
          name: "Death Burst",
          desc:
            "When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."
        },
        {
          monster_id: 92,
          name: "Innate Spellcasting (1/Day)",
          desc:
            "The mephit can innately cast _sleep_, requiring no material components. Its innate spellcasting ability is Charisma."
        },
        {
          monster_id: 93,
          name: "Keen Sight",
          desc:
            "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 94,
          name: "Earth Glide",
          desc:
            "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
        },
        {
          monster_id: 94,
          name: "Siege Monster",
          desc: "The elemental deals double damage to objects and structures."
        },
        {
          monster_id: 95,
          name: "Elemental Demise",
          desc:
            "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying."
        },
        {
          monster_id: 95,
          name: "Innate Spellcasting",
          desc:
            "The efreeti's innate spell casting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components:  At will: detect magic 3/day: enlarge/reduce, tongues 1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire"
        },
        {
          monster_id: 95,
          name: "Variant: Genie Powers",
          desc:
            "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.  Disguises. Some genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well. Wishes. The genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence. To be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit."
        },
        {
          monster_id: 96,
          name: "Trampling Charge",
          desc:
            "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
        },
        {
          monster_id: 97,
          name: "Charge",
          desc:
            "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 98,
          name: "Hellish Weapons",
          desc:
            "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
        },
        {
          monster_id: 98,
          name: "Magic Resistance",
          desc:
            "The erinyes has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 99,
          name: "Spider Climb",
          desc:
            "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 99,
          name: "Web Sense",
          desc:
            "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web."
        },
        {
          monster_id: 99,
          name: "Web Walker",
          desc: "The ettercap ignores movement restrictions caused by webbing."
        },
        {
          monster_id: 100,
          name: "Two Heads",
          desc:
            "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
        },
        {
          monster_id: 100,
          name: "Wakeful",
          desc:
            "When one of the ettin's heads is asleep, its other head is awake."
        },
        {
          monster_id: 101,
          name: "Fire Form",
          desc:
            "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns.",
          attack_bonus: 0,
          damage_dice: "5d10"
        },
        {
          monster_id: 101,
          name: "Illumination",
          desc:
            "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft.."
        },
        {
          monster_id: 101,
          name: "Water Susceptibility",
          desc:
            "For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
        },
        {
          monster_id: 103,
          name: "Aversion of Fire",
          desc:
            "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
        },
        {
          monster_id: 103,
          name: "Berserk",
          desc:
            "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points. The golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again."
        },
        {
          monster_id: 103,
          name: "Immutable Form",
          desc:
            "The golem is immune to any spell or effect that would alter its form."
        },
        {
          monster_id: 103,
          name: "Lightning Absorption",
          desc:
            "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt."
        },
        {
          monster_id: 103,
          name: "Magic Resistance",
          desc:
            "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 103,
          name: "Magic Weapons",
          desc: "The golem's weapon attacks are magical."
        },
        {
          monster_id: 104,
          name: "Flyby",
          desc:
            "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
          monster_id: 105,
          name: "Antimagic Susceptibility",
          desc:
            "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
        },
        {
          monster_id: 105,
          name: "False Appearance",
          desc:
            "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword."
        },
        {
          monster_id: 106,
          name: "Amphibious",
          desc: "The frog can breathe air and water"
        },
        {
          monster_id: 106,
          name: "Standing Leap",
          desc:
            "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start."
        },
        {
          monster_id: 108,
          name: "False Appearance",
          desc:
            "While the gargoyle remains motion less, it is indistinguishable from an inanimate statue."
        },
        {
          monster_id: 109,
          name: "Ooze Cube",
          desc:
            "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw. Creatures inside the cube can be seen but have total cover. A creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage. The cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time."
        },
        {
          monster_id: 109,
          name: "Transparent",
          desc:
            "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube."
        },
        {
          monster_id: 110,
          name: "Stench",
          desc:
            "Any creature that starts its turn within 5 ft. of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours."
        },
        {
          monster_id: 110,
          name: "Turn Defiance",
          desc:
            "The ghast and any ghouls within 30 ft. of it have advantage on saving throws against effects that turn undead."
        },
        {
          monster_id: 111,
          name: "Ethereal Sight",
          desc:
            "The ghost can see 60 ft. into the Ethereal Plane when it is on the Material Plane, and vice versa."
        },
        {
          monster_id: 111,
          name: "Incorporeal Movement",
          desc:
            "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        },
        {
          monster_id: 114,
          name: "Keen Smell",
          desc:
            "The badger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 115,
          name: "Echolocation",
          desc: "The bat can't use its blindsight while deafened."
        },
        {
          monster_id: 115,
          name: "Keen Hearing",
          desc:
            "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        {
          monster_id: 116,
          name: "Charge",
          desc:
            "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 116,
          name: "Relentless (Recharges after a Short or Long Rest)",
          desc:
            "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
        },
        {
          monster_id: 119,
          name: "Amphibious",
          desc: "The crab can breathe air and water."
        },
        {
          monster_id: 120,
          name: "Hold Breath",
          desc: "The crocodile can hold its breath for 30 minutes."
        },
        {
          monster_id: 121,
          name: "Keen Sight",
          desc:
            "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 122,
          name: "Charge",
          desc:
            "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 123,
          name: "Illumination",
          desc:
            "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
        },
        {
          monster_id: 124,
          name: "Amphibious",
          desc: "The frog can breathe air and water"
        },
        {
          monster_id: 124,
          name: "Standing Leap",
          desc:
            "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
        },
        {
          monster_id: 125,
          name: "Charge",
          desc:
            "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d4"
        },
        {
          monster_id: 125,
          name: "Sure-Footed",
          desc:
            "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        },
        {
          monster_id: 126,
          name: "Rampage",
          desc:
            "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
        },
        {
          monster_id: 127,
          name: "Variant: Hold Breath",
          desc:
            "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)"
        },
        {
          monster_id: 127,
          name: "Variant: Spider Climb",
          desc:
            "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 128,
          name: "Hold Breath",
          desc:
            "While out of water, the octopus can hold its breath for 1 hour."
        },
        {
          monster_id: 128,
          name: "Underwater Camouflage",
          desc:
            "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
        },
        {
          monster_id: 128,
          name: "Water Breathing",
          desc: "The octopus can breathe only underwater."
        },
        {
          monster_id: 129,
          name: "Flyby",
          desc:
            "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
          monster_id: 129,
          name: "Keen Hearing and Sight",
          desc:
            "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        },
        {
          monster_id: 131,
          name: "Keen Smell",
          desc:
            "The rat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 131,
          name: "Pack Tactics",
          desc:
            "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 134,
          name: "Charge",
          desc:
            "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 134,
          name: "Water Breathing",
          desc: "The sea horse can breathe only underwater."
        },
        {
          monster_id: 135,
          name: "Blood Frenzy",
          desc:
            "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          monster_id: 135,
          name: "Water Breathing",
          desc: "The shark can breathe only underwater."
        },
        {
          monster_id: 136,
          name: "Spider Climb",
          desc:
            "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 136,
          name: "Web Sense",
          desc:
            "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
        },
        {
          monster_id: 136,
          name: "Web Walker",
          desc: "The spider ignores movement restrictions caused by webbing."
        },
        {
          monster_id: 137,
          name: "Amphibious",
          desc: "The toad can breathe air and water"
        },
        {
          monster_id: 137,
          name: "Standing Leap",
          desc:
            "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
        },
        {
          monster_id: 138,
          name: "Keen Sight and Smell",
          desc:
            "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
        },
        {
          monster_id: 138,
          name: "Pack Tactics",
          desc:
            "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 140,
          name: "Keen Hearing and Smell",
          desc:
            "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 141,
          name: "Spider Climb",
          desc:
            "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 141,
          name: "Web Sense",
          desc:
            "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
        },
        {
          monster_id: 141,
          name: "Web Walker",
          desc: "The spider ignores movement restrictions caused by webbing."
        },
        {
          monster_id: 142,
          name: "Aberrant Ground",
          desc:
            "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn."
        },
        {
          monster_id: 142,
          name: "Gibbering",
          desc:
            "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
        },
        {
          monster_id: 143,
          name: "Innate Spellcasting",
          desc:
            "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components: At will: darkness, detect magic, dispel magic 1/day each: confusion, fly, power word stun"
        },
        {
          monster_id: 143,
          name: "Magic Resistance",
          desc:
            "The glabrezu has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 144,
          name: "Brave",
          desc:
            "The gladiator has advantage on saving throws against being frightened."
        },
        {
          monster_id: 144,
          name: "Brute",
          desc:
            "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."
        },
        {
          monster_id: 145,
          name: "Rampage",
          desc:
            "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
        },
        {
          monster_id: 146,
          name: "Charge",
          desc:
            "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "1d4"
        },
        {
          monster_id: 146,
          name: "Sure-Footed",
          desc:
            "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        },
        {
          monster_id: 147,
          name: "Nimble Escape",
          desc:
            "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
        },
        {
          monster_id: 148,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 149,
          name: "Trampling Charge",
          desc:
            "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action."
        },
        {
          monster_id: 150,
          name: "Amorphous",
          desc:
            "The ooze can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          monster_id: 150,
          name: "Corrode Metal",
          desc:
            "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage. The ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
        },
        {
          monster_id: 150,
          name: "False Appearance",
          desc:
            "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
        },
        {
          monster_id: 151,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 152,
          name: "Amphibious",
          desc: "The hag can breathe air and water."
        },
        {
          monster_id: 152,
          name: "Hag Coven",
          desc:
            "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power. A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
        },
        {
          monster_id: 152,
          name: "Hag Eye (Coven Only)",
          desc:
            "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours. A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
        },
        {
          monster_id: 152,
          name: "Innate Spellcasting",
          desc:
            "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:  At will: dancing lights, minor illusion, vicious mockery"
        },
        {
          monster_id: 152,
          name: "Mimicry",
          desc:
            "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."
        },
        {
          monster_id: 152,
          name: "Shared Spellcasting (Coven Only)",
          desc:
            "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:  • 1st level (4 slots): identify, ray of sickness • 2nd level (3 slots): hold person, locate object • 3rd level (3 slots): bestow curse, counterspell, lightning bolt • 4th level (3 slots): phantasmal killer, polymorph • 5th level (2 slots): contact other plane, scrying • 6th level (1 slot): eye bite  For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
        },
        {
          monster_id: 153,
          name: "Stone Camouflage",
          desc:
            "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        {
          monster_id: 154,
          name: "Keen Sight",
          desc:
            "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 155,
          name: "Blind Senses",
          desc:
            "The grimlock can't use its blindsight while deafened and unable to smell."
        },
        {
          monster_id: 155,
          name: "Keen Hearing and Smell",
          desc:
            "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 155,
          name: "Stone Camouflage",
          desc:
            "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        {
          monster_id: 157,
          name: "Rejuvenation",
          desc:
            "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
        },
        {
          monster_id: 157,
          name: "Spellcasting",
          desc:
            "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:  • Cantrips (at will): mending, sacred flame, thaumaturgy • 1st level (4 slots): command, cure wounds, shield of faith • 2nd level (3 slots): calm emotions, hold person • 3rd level (3 slots): bestow curse, clairvoyance • 4th level (3 slots): banishment, freedom of movement • 5th level (2 slots): flame strike, geas • 6th level (1 slot): true seeing"
        },
        {
          monster_id: 158,
          name: "Inscrutable",
          desc:
            "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
        },
        {
          monster_id: 158,
          name: "Magic Weapons",
          desc: "The sphinx's weapon attacks are magical."
        },
        {
          monster_id: 158,
          name: "Spellcasting",
          desc:
            "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:  • Cantrips (at will): mage hand, minor illusion, prestidigitation • 1st level (4 slots): detect magic, identify, shield • 2nd level (3 slots): darkness, locate object, suggestion • 3rd level (3 slots): dispel magic, remove curse, tongues • 4th level (3 slots): banishment, greater invisibility • 5th level (1 slot): legend lore"
        },
        {
          monster_id: 161,
          name: "Keen Sight",
          desc:
            "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 162,
          name: "Keen Hearing and Smell",
          desc:
            "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 162,
          name: "Pack Tactics",
          desc:
            "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 163,
          name: "Magic Resistance",
          desc:
            "The hezrou has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 163,
          name: "Stench",
          desc:
            "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours."
        },
        {
          monster_id: 165,
          name: "Keen Sight",
          desc:
            "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 166,
          name: "Martial Advantage",
          desc:
            "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 167,
          name: "Telepathic Bond",
          desc:
            "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
        },
        {
          monster_id: 168,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          monster_id: 168,
          name: "Magic Resistance",
          desc:
            "The devil has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 169,
          name: "Blood Frenzy",
          desc:
            "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          monster_id: 169,
          name: "Water Breathing",
          desc: "The shark can breathe only underwater."
        },
        {
          monster_id: 170,
          name: "Hold Breath",
          desc: "The hydra can hold its breath for 1 hour."
        },
        {
          monster_id: 170,
          name: "Multiple Heads",
          desc:
            "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious. Whenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies. At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way."
        },
        {
          monster_id: 170,
          name: "Reactive Heads",
          desc:
            "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks."
        },
        {
          monster_id: 170,
          name: "Wakeful",
          desc: "While the hydra sleeps, at least one of its heads is awake."
        },
        {
          monster_id: 171,
          name: "Pack Tactics",
          desc:
            "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 172,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          monster_id: 172,
          name: "Magic Resistance",
          desc:
            "The devil has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 173,
          name: "Death Burst",
          desc:
            "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "1d8"
        },
        {
          monster_id: 173,
          name: "False Appearance",
          desc:
            "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice."
        },
        {
          monster_id: 173,
          name: "Innate Spellcasting (1/Day)",
          desc:
            "The mephit can innately cast _fog cloud_, requiring no material components. Its innate spellcasting ability is Charisma."
        },
        {
          monster_id: 174,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the imp's darkvision."
        },
        {
          monster_id: 174,
          name: "Magic Resistance",
          desc:
            "The imp has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 174,
          name: "Shapechanger",
          desc:
            "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 174,
          name: "Variant: Familiar",
          desc:
            "The imp can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the imp is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the imp can end its service as a familiar, ending the telepathic bond."
        },
        {
          monster_id: 175,
          name: "Faultless Tracker",
          desc:
            "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner."
        },
        {
          monster_id: 175,
          name: "Invisibility",
          desc: "The stalker is invisible."
        },
        {
          monster_id: 176,
          name: "Fire Absorption",
          desc:
            "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt."
        },
        {
          monster_id: 176,
          name: "Immutable Form",
          desc:
            "The golem is immune to any spell or effect that would alter its form."
        },
        {
          monster_id: 176,
          name: "Magic Resistance",
          desc:
            "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 176,
          name: "Magic Weapons",
          desc: "The golem's weapon attacks are magical."
        },
        {
          monster_id: 177,
          name: "Keen Hearing and Smell",
          desc:
            "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 177,
          name: "Pack Tactics",
          desc:
            "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 178,
          name: "Echolocation",
          desc: "The whale can't use its blindsight while deafened."
        },
        {
          monster_id: 178,
          name: "Hold Breath",
          desc: "The whale can hold its breath for 30 minutes"
        },
        {
          monster_id: 178,
          name: "Keen Hearing",
          desc:
            "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        {
          monster_id: 179,
          name: "Brave",
          desc:
            "The knight has advantage on saving throws against being frightened."
        },
        {
          monster_id: 180,
          name: "Pack Tactics",
          desc:
            "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 180,
          name: "Sunlight Sensitivity",
          desc:
            "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 181,
          name: "Amphibious",
          desc: "The kraken can breathe air and water."
        },
        {
          monster_id: 181,
          name: "Freedom of Movement",
          desc:
            "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled."
        },
        {
          monster_id: 181,
          name: "Siege Monster",
          desc: "The kraken deals double damage to objects and structures."
        },
        {
          monster_id: 182,
          name: "Innate Spellcasting",
          desc:
            "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components.  At will: disguise self (any humanoid form), major image 3/day each: charm person, mirror image, scrying, suggestion 1/day: geas"
        },
        {
          monster_id: 183,
          name: "Devil's Sight",
          desc: "Magical darkness doesn't impede the lemure's darkvision."
        },
        {
          monster_id: 183,
          name: "Hellish Rejuvenation",
          desc:
            "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water."
        },
        {
          monster_id: 184,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the lich fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 184,
          name: "Rejuvenation",
          desc:
            "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
        },
        {
          monster_id: 184,
          name: "Spellcasting",
          desc:
            "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:  • Cantrips (at will): mage hand, prestidigitation, ray of frost • 1st level (4 slots): detect magic, magic missile, shield, thunderwave • 2nd level (3 slots): detect thoughts, invisibility, Melf's acid arrow, mirror image • 3rd level (3 slots): animate dead, counterspell, dispel magic, fireball • 4th level (3 slots): blight, dimension door • 5th level (3 slots): cloudkill, scrying • 6th level (1 slot): disintegrate, globe of invulnerability • 7th level (1 slot): finger of death, plane shift • 8th level (1 slot): dominate monster, power word stun • 9th level (1 slot): power word kill"
        },
        {
          monster_id: 184,
          name: "Turn Resistance",
          desc:
            "The lich has advantage on saving throws against any effect that turns undead."
        },
        {
          monster_id: 185,
          name: "Keen Smell",
          desc:
            "The lion has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 185,
          name: "Pack Tactics",
          desc:
            "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 185,
          name: "Pounce",
          desc:
            "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
        },
        {
          monster_id: 185,
          name: "Running Leap",
          desc:
            "With a 10-foot running start, the lion can long jump up to 25 ft.."
        },
        {
          monster_id: 187,
          name: "Hold Breath",
          desc: "The lizardfolk can hold its breath for 15 minutes."
        },
        {
          monster_id: 188,
          name: "Spellcasting",
          desc:
            "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:  • Cantrips (at will): fire bolt, light, mage hand, prestidigitation • 1st level (4 slots): detect magic, mage armor, magic missile, shield • 2nd level (3 slots): misty step, suggestion • 3rd level (3 slots): counterspell, fireball, fly • 4th level (3 slots): greater invisibility, ice storm • 5th level (1 slot): cone of cold"
        },
        {
          monster_id: 189,
          name: "Death Burst",
          desc:
            "When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 189,
          name: "False Appearance",
          desc:
            "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma."
        },
        {
          monster_id: 189,
          name: "Innate Spellcasting (1/Day)",
          desc:
            "The mephit can innately cast _heat metal_ (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma."
        },
        {
          monster_id: 190,
          name: "Death Burst",
          desc:
            "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 190,
          name: "Ignited Illumination",
          desc:
            "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft."
        },
        {
          monster_id: 191,
          name: "Trampling Charge",
          desc:
            "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
        },
        {
          monster_id: 192,
          name: "Tail Spike Regrowth",
          desc:
            "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest."
        },
        {
          monster_id: 193,
          name: "Magic Resistance",
          desc:
            "The marilith has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 193,
          name: "Magic Weapons",
          desc: "The marilith's weapon attacks are magical."
        },
        {
          monster_id: 193,
          name: "Reactive",
          desc: "The marilith can take one reaction on every turn in combat."
        },
        {
          monster_id: 194,
          name: "Keen Hearing and Smell",
          desc:
            "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 195,
          name: "Petrifying Gaze",
          desc:
            "When a creature that can see the medusa's eyes starts its turn within 30 ft. of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic. Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save. If the medusa sees itself reflected on a polished surface within 30 ft. of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze."
        },
        {
          monster_id: 196,
          name: "Amphibious",
          desc: "The merfolk can breathe air and water."
        },
        {
          monster_id: 197,
          name: "Amphibious",
          desc: "The merrow can breathe air and water."
        },
        {
          monster_id: 198,
          name: "Adhesive (Object Form Only)",
          desc:
            "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
        },
        {
          monster_id: 198,
          name: "False Appearance (Object Form Only)",
          desc:
            "While the mimic remains motionless, it is indistinguishable from an ordinary object."
        },
        {
          monster_id: 198,
          name: "Grappler",
          desc:
            "The mimic has advantage on attack rolls against any creature grappled by it."
        },
        {
          monster_id: 198,
          name: "Shapechanger",
          desc:
            "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn 't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 199,
          name: "Charge",
          desc:
            "If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 ft. away and knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d8"
        },
        {
          monster_id: 199,
          name: "Labyrinthine Recall",
          desc: "The minotaur can perfectly recall any path it has traveled."
        },
        {
          monster_id: 199,
          name: "Reckless",
          desc:
            "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
        },
        {
          monster_id: 200,
          name: "Charge",
          desc:
            "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d8"
        },
        {
          monster_id: 201,
          name: "Beast of Burden",
          desc:
            "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
        },
        {
          monster_id: 201,
          name: "Sure-Footed",
          desc:
            "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        },
        {
          monster_id: 203,
          name: "Magic Resistance",
          desc:
            "The mummy lord has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 203,
          name: "Rejuvenation",
          desc:
            "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart."
        },
        {
          monster_id: 203,
          name: "Spellcasting",
          desc:
            "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:  • Cantrips (at will): sacred flame, thaumaturgy • 1st level (4 slots): command, guiding bolt, shield of faith • 2nd level (3 slots): hold person, silence, spiritual weapon • 3rd level (3 slots): animate dead, dispel magic • 4th level (3 slots): divination, guardian of faith • 5th level (2 slots): contagion, insect plague • 6th level (1 slot): harm"
        },
        {
          monster_id: 204,
          name: "Magic Resistance",
          desc:
            "The nalfeshnee has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 205,
          name: "Hag Coven",
          desc:
            "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power. A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
        },
        {
          monster_id: 205,
          name: "Hag Eye (Coven Only)",
          desc:
            "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours. A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
        },
        {
          monster_id: 205,
          name: "Innate Spellcasting",
          desc:
            "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:  At will: detect magic, magic missile 2/day each: plane shift (self only), ray of enfeeblement, sleep"
        },
        {
          monster_id: 205,
          name: "Magic Resistance",
          desc:
            "The hag has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 205,
          name: "Night Hag Items",
          desc:
            "A night hag carries two very rare magic items that she must craft for herself If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort. Heartstone: This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days. Soul Bag: When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
        },
        {
          monster_id: 205,
          name: "Shared Spellcasting (Coven Only)",
          desc:
            "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:  • 1st level (4 slots): identify, ray of sickness • 2nd level (3 slots): hold person, locate object • 3rd level (3 slots): bestow curse, counterspell, lightning bolt • 4th level (3 slots): phantasmal killer, polymorph • 5th level (2 slots): contact other plane, scrying • 6th level (1 slot): eye bite  For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
        },
        {
          monster_id: 206,
          name: "Confer Fire Resistance",
          desc:
            "The nightmare can grant resistance to fire damage to anyone riding it."
        },
        {
          monster_id: 206,
          name: "Illumination",
          desc:
            "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
        },
        {
          monster_id: 208,
          name: "Amorphous",
          desc:
            "The jelly can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          monster_id: 208,
          name: "Spider Climb",
          desc:
            "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 209,
          name: "Hold Breath",
          desc:
            "While out of water, the octopus can hold its breath for 30 minutes."
        },
        {
          monster_id: 209,
          name: "Underwater Camouflage",
          desc:
            "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
        },
        {
          monster_id: 209,
          name: "Water Breathing",
          desc: "The octopus can breathe only underwater."
        },
        {
          monster_id: 211,
          name: "Undead Fortitude",
          desc:
            "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
        },
        {
          monster_id: 212,
          name: "Innate Spellcasting",
          desc:
            "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:  At will: darkness, invisibility 1/day each: charm person, cone of cold, gaseous form, sleep"
        },
        {
          monster_id: 212,
          name: "Magic Weapons",
          desc: "The oni's weapon attacks are magical."
        },
        {
          monster_id: 212,
          name: "Regeneration",
          desc:
            "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point."
        },
        {
          monster_id: 213,
          name: "Aggressive",
          desc:
            "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
        },
        {
          monster_id: 214,
          name: "Limited Telepathy",
          desc:
            "The otyugh can magically transmit simple messages and images to any creature within 120 ft. of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond."
        },
        {
          monster_id: 215,
          name: "Flyby",
          desc:
            "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
          monster_id: 215,
          name: "Keen Hearing and Sight",
          desc:
            "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        },
        {
          monster_id: 216,
          name: "Keen Sight and Smell",
          desc:
            "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."
        },
        {
          monster_id: 217,
          name: "Keen Smell",
          desc:
            "The panther has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 217,
          name: "Pounce",
          desc:
            "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
        },
        {
          monster_id: 219,
          name: "Ethereal Jaunt",
          desc:
            "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa."
        },
        {
          monster_id: 219,
          name: "Spider Climb",
          desc:
            "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 219,
          name: "Web Walker",
          desc: "The spider ignores movement restrictions caused by webbing."
        },
        {
          monster_id: 220,
          name: "Fear Aura",
          desc:
            "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours."
        },
        {
          monster_id: 220,
          name: "Innate Spellcasting",
          desc:
            "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components: At will: detect magic, fireball 3/day each: hold monster, wall of fire"
        },
        {
          monster_id: 220,
          name: "Magic Resistance",
          desc:
            "The pit fiend has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 220,
          name: "Magic Weapons",
          desc: "The pit fiend's weapon attacks are magical."
        },
        {
          monster_id: 221,
          name: "Angelic Weapons",
          desc:
            "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)."
        },
        {
          monster_id: 221,
          name: "Divine Awareness",
          desc: "The planetar knows if it hears a lie."
        },
        {
          monster_id: 221,
          name: "Innate Spellcasting",
          desc:
            "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components: At will: detect evil and good, invisibility (self only) 3/day each: blade barrier, dispel evil and good, flame strike, raise dead 1/day each: commune, control weather, insect plague"
        },
        {
          monster_id: 221,
          name: "Magic Resistance",
          desc:
            "The planetar has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 222,
          name: "Hold Breath",
          desc: "The plesiosaurus can hold its breath for 1 hour."
        },
        {
          monster_id: 224,
          name: "Keen Smell",
          desc:
            "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 226,
          name: "Divine Eminence",
          desc:
            "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.",
          attack_bonus: 0,
          damage_dice: "3d6"
        },
        {
          monster_id: 226,
          name: "Spellcasting",
          desc:
            "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:  • Cantrips (at will): light, sacred flame, thaumaturgy • 1st level (4 slots): cure wounds, guiding bolt, sanctuary • 2nd level (3 slots): lesser restoration, spiritual weapon • 3rd level (2 slots): dispel magic, spirit guardians"
        },
        {
          monster_id: 227,
          name: "Keen Senses",
          desc:
            "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
        },
        {
          monster_id: 227,
          name: "Limited Telepathy",
          desc:
            "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft. of it that can understand a language."
        },
        {
          monster_id: 227,
          name: "Magic Resistance",
          desc:
            "The pseudodragon has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 227,
          name: "Variant: Familiar",
          desc:
            "The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond."
        },
        {
          monster_id: 228,
          name: "Tunneler",
          desc:
            "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
        },
        {
          monster_id: 229,
          name: "Magic Resistance",
          desc:
            "The quasit has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 229,
          name: "Shapechanger",
          desc:
            "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form . Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed . It reverts to its true form if it dies."
        },
        {
          monster_id: 229,
          name: "Variant: Familiar",
          desc:
            "The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond."
        },
        {
          monster_id: 230,
          name: "Blood Frenzy",
          desc:
            "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          monster_id: 230,
          name: "Water Breathing",
          desc: "The quipper can breathe only underwater."
        },
        {
          monster_id: 231,
          name: "Innate Spellcasting",
          desc:
            "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:  At will: detect thoughts, disguise self, mage hand, minor illusion 3/day each: charm person, detect magic, invisibility, major image, suggestion 1/day each: dominate person, fly, plane shift, true seeing"
        },
        {
          monster_id: 231,
          name: "Limited Magic Immunity",
          desc:
            "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects."
        },
        {
          monster_id: 232,
          name: "Keen Smell",
          desc:
            "The rat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 233,
          name: "Mimicry",
          desc:
            "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
        },
        {
          monster_id: 235,
          name: "Pack Tactics",
          desc:
            "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 235,
          name: "Water Breathing",
          desc: "The shark can breathe only underwater."
        },
        {
          monster_id: 236,
          name: "Heated Body",
          desc:
            "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
          attack_bonus: 0,
          damage_dice: "3d6"
        },
        {
          monster_id: 237,
          name: "Charge",
          desc:
            "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d8"
        },
        {
          monster_id: 239,
          name: "Keen Sight",
          desc:
            "The roc has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 240,
          name: "False Appearance",
          desc:
            "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
        },
        {
          monster_id: 240,
          name: "Grasping Tendrils",
          desc:
            "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it."
        },
        {
          monster_id: 240,
          name: "Spider Climb",
          desc:
            "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 241,
          name: "Antimagic Susceptibility",
          desc:
            "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
        },
        {
          monster_id: 241,
          name: "Damage Transfer",
          desc:
            "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
        },
        {
          monster_id: 241,
          name: "False Appearance",
          desc:
            "While the rug remains motionless, it is indistinguishable from a normal rug."
        },
        {
          monster_id: 242,
          name: "Iron Scent",
          desc:
            "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it."
        },
        {
          monster_id: 242,
          name: "Rust Metal",
          desc:
            "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Non magical ammunition made of metal that hits the rust monster is destroyed after dealing damage."
        },
        {
          monster_id: 243,
          name: "Keen Smell",
          desc:
            "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 243,
          name: "Pounce",
          desc:
            "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
        },
        {
          monster_id: 244,
          name: "Blood Frenzy",
          desc:
            "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          monster_id: 244,
          name: "Limited Amphibiousness",
          desc:
            "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
        },
        {
          monster_id: 244,
          name: "Shark Telepathy",
          desc:
            "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
        },
        {
          monster_id: 245,
          name: "Heated Body",
          desc:
            "A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes 7 (2d6) fire damage.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 245,
          name: "Heated Weapons",
          desc:
            "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)."
        },
        {
          monster_id: 246,
          name: "Magic Resistance",
          desc:
            "The satyr has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 248,
          name: "Keen Hearing and Sight",
          desc:
            "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        },
        {
          monster_id: 249,
          name: "Amphibious",
          desc: "The hag can breathe air and water."
        },
        {
          monster_id: 249,
          name: "Hag Coven",
          desc:
            "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power. A coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos."
        },
        {
          monster_id: 249,
          name: "Hag Eye (Coven Only)",
          desc:
            "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours. A hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over."
        },
        {
          monster_id: 249,
          name: "Horrific Appearance",
          desc:
            "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours. Unless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag."
        },
        {
          monster_id: 249,
          name: "Shared Spellcasting (Coven Only)",
          desc:
            "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:  • 1st level (4 slots): identify, ray of sickness • 2nd level (3 slots): hold person, locate object • 3rd level (3 slots): bestow curse, counterspell, lightning bolt • 4th level (3 slots): phantasmal killer, polymorph • 5th level (2 slots): contact other plane, scrying • 6th level (1 slot): eye bite  For casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier."
        },
        {
          monster_id: 250,
          name: "Water Breathing",
          desc: "The sea horse can breathe only underwater."
        },
        {
          monster_id: 251,
          name: "Amorphous",
          desc:
            "The shadow can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          monster_id: 251,
          name: "Shadow Stealth",
          desc:
            "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6."
        },
        {
          monster_id: 251,
          name: "Sunlight Weakness",
          desc:
            "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws."
        },
        {
          monster_id: 252,
          name: "Lightning Absorption",
          desc:
            "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt."
        },
        {
          monster_id: 253,
          name: "Bound",
          desc:
            "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian."
        },
        {
          monster_id: 253,
          name: "Regeneration",
          desc:
            "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit. point."
        },
        {
          monster_id: 253,
          name: "Spell Storing",
          desc:
            "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost."
        },
        {
          monster_id: 254,
          name: "False Appearance",
          desc:
            "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus."
        },
        {
          monster_id: 257,
          name: "Angelic Weapons",
          desc:
            "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."
        },
        {
          monster_id: 257,
          name: "Divine Awareness",
          desc: "The solar knows if it hears a lie."
        },
        {
          monster_id: 257,
          name: "Innate Spellcasting",
          desc:
            "The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components: At will: detect evil and good, invisibility (self only) 3/day each: blade barrier, dispel evil and good, resurrection 1/day each: commune, control weather"
        },
        {
          monster_id: 257,
          name: "Magic Resistance",
          desc:
            "The solar has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 258,
          name: "Incorporeal Movement",
          desc:
            "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        },
        {
          monster_id: 258,
          name: "Sunlight Sensitivity",
          desc:
            "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 259,
          name: "Spider Climb",
          desc:
            "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 259,
          name: "Web Sense",
          desc:
            "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
        },
        {
          monster_id: 259,
          name: "Web Walker",
          desc: "The spider ignores movement restrictions caused by webbing."
        },
        {
          monster_id: 260,
          name: "Rejuvenation",
          desc:
            "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
        },
        {
          monster_id: 260,
          name: "Spellcasting",
          desc:
            "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:  • Cantrips (at will): mage hand, minor illusion, ray of frost • 1st level (4 slots): charm person, detect magic, sleep • 2nd level (3 slots): detect thoughts, hold person • 3rd level (3 slots): lightning bolt, water breathing • 4th level (3 slots): blight, dimension door • 5th level (2 slots): dominate person"
        },
        {
          monster_id: 262,
          name: "Cunning Action",
          desc:
            "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
        },
        {
          monster_id: 262,
          name: "Sneak Attack (1/Turn)",
          desc:
            "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 263,
          name: "Death Burst",
          desc:
            "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage.",
          attack_bonus: 0,
          damage_dice: "1d8"
        },
        {
          monster_id: 263,
          name: "Innate Spellcasting (1/Day)",
          desc:
            "The mephit can innately cast _blur_, requiring no material components. Its innate spellcasting ability is Charisma."
        },
        {
          monster_id: 265,
          name: "Stone Camouflage",
          desc:
            "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        {
          monster_id: 266,
          name: "Immutable Form",
          desc:
            "The golem is immune to any spell or effect that would alter its form."
        },
        {
          monster_id: 266,
          name: "Magic Resistance",
          desc:
            "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 266,
          name: "Magic Weapons",
          desc: "The golem's weapon attacks are magical."
        },
        {
          monster_id: 267,
          name: "Amphibious",
          desc: "The giant can breathe air and water."
        },
        {
          monster_id: 267,
          name: "Innate Spellcasting",
          desc:
            "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:  At will: detect magic, feather fall, levitate, light 3/day each: control weather, water breathing"
        },
        {
          monster_id: 268,
          name: "Shapechanger",
          desc:
            "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 268,
          name: "Telepathic Bond",
          desc:
            "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
        },
        {
          monster_id: 269,
          name: "Echolocation",
          desc: "The swarm can't use its blindsight while deafened."
        },
        {
          monster_id: 269,
          name: "Keen Hearing",
          desc:
            "The swarm has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        {
          monster_id: 269,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 270,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 271,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 272,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 273,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 274,
          name: "Blood Frenzy",
          desc:
            "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          monster_id: 274,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 274,
          name: "Water Breathing",
          desc: "The swarm can breathe only underwater."
        },
        {
          monster_id: 275,
          name: "Keen Smell",
          desc:
            "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 275,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 276,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 277,
          name: "Spider Climb",
          desc:
            "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 277,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 277,
          name: "Web Sense",
          desc:
            "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web."
        },
        {
          monster_id: 277,
          name: "Web Walker",
          desc: "The swarm ignores movement restrictions caused by webbing."
        },
        {
          monster_id: 278,
          name: "Swarm",
          desc:
            "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          monster_id: 279,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the tarrasque fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 279,
          name: "Magic Resistance",
          desc:
            "The tarrasque has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 279,
          name: "Reflective Carapace",
          desc:
            "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target."
        },
        {
          monster_id: 279,
          name: "Siege Monster",
          desc: "The tarrasque deals double damage to objects and structures."
        },
        {
          monster_id: 280,
          name: "Pack Tactics",
          desc:
            "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 281,
          name: "Keen Smell",
          desc:
            "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 281,
          name: "Pounce",
          desc:
            "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
        },
        {
          monster_id: 282,
          name: "False Appearance",
          desc:
            "While the treant remains motionless, it is indistinguishable from a normal tree."
        },
        {
          monster_id: 282,
          name: "Siege Monster",
          desc: "The treant deals double damage to objects and structures."
        },
        {
          monster_id: 283,
          name: "Pack Tactics",
          desc:
            "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 284,
          name: "Trampling Charge",
          desc:
            "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
        },
        {
          monster_id: 285,
          name: "Keen Smell",
          desc:
            "The troll has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 285,
          name: "Regeneration",
          desc:
            "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
        },
        {
          monster_id: 285,
          name: "Variant: Loathsome Limbs",
          desc:
            "Whenever the troll takes at least 15 slashing damage at one time, roll a d20 to determine what else happens to it: 1-10: Nothing else happens. 11-14: One leg is severed from the troll if it has any legs left. 15- 18: One arm is severed from the troll if it has any arms left. 19-20: The troll is decapitated, but the troll dies only if it can't regenerate. If it dies, so does the severed head. If the troll finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on the troll's initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and the troll's Regeneration trait. A severed leg is unable to attack and has a speed of 5 feet. A severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll unless the troll can see the arm and its target. Each time the troll loses an arm, it loses a claw attack. If its head is severed, the troll loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet and the troll's Keen Smell trait. It can make a bite attack but only against a target in its space. The troll's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed."
        },
        {
          monster_id: 287,
          name: "Charge",
          desc:
            "If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d8"
        },
        {
          monster_id: 287,
          name: "Innate Spellcasting",
          desc:
            "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:  At will: detect evil and good, druidcraft, pass without trace 1/day each: calm emotions, dispel evil and good, entangle"
        },
        {
          monster_id: 287,
          name: "Magic Resistance",
          desc:
            "The unicorn has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 287,
          name: "Magic Weapons",
          desc: "The unicorn's weapon attacks are magical."
        },
        {
          monster_id: 288,
          name: "Legendary Resistance (3/Day)",
          desc:
            "If the vampire fails a saving throw, it can choose to succeed instead."
        },
        {
          monster_id: 288,
          name: "Misty Escape",
          desc:
            "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed. While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
        },
        {
          monster_id: 288,
          name: "Regeneration",
          desc:
            "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
        },
        {
          monster_id: 288,
          name: "Shapechanger",
          desc:
            "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form. While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies. While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight."
        },
        {
          monster_id: 288,
          name: "Spider Climb",
          desc:
            "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 288,
          name: "Vampire Weaknesses",
          desc:
            "The vampire has the following flaws: Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants. Harmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water. Stake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed. Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
        },
        {
          monster_id: 289,
          name: "Regeneration",
          desc:
            "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
        },
        {
          monster_id: 289,
          name: "Spider Climb",
          desc:
            "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          monster_id: 289,
          name: "Vampire Weaknesses",
          desc:
            "The vampire has the following flaws: Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants. Harmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water. Stake to the Heart. The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place. Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
        },
        {
          monster_id: 291,
          name: "False Appearance",
          desc:
            "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus."
        },
        {
          monster_id: 292,
          name: "Magic Resistance",
          desc:
            "The vrock has advantage on saving throws against spells and other magical effects."
        },
        {
          monster_id: 293,
          name: "Keen Sight and Smell",
          desc:
            "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
        },
        {
          monster_id: 293,
          name: "Pack Tactics",
          desc:
            "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 294,
          name: "Trampling Charge",
          desc:
            "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
        },
        {
          monster_id: 296,
          name: "Freeze",
          desc:
            "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn."
        },
        {
          monster_id: 296,
          name: "Water Form",
          desc:
            "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          monster_id: 297,
          name: "Keen Hearing and Smell",
          desc:
            "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 298,
          name: "Keen Smell",
          desc:
            "The werebear has advantage on WisGlom (Perception) checks that rely on smell."
        },
        {
          monster_id: 298,
          name: "Shapechanger",
          desc:
            "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it. is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 299,
          name: "Charge (Boar or Hybrid Form Only)",
          desc:
            "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
          attack_bonus: 0,
          damage_dice: "2d6"
        },
        {
          monster_id: 299,
          name: "Relentless (Recharges after a Short or Long Rest)",
          desc:
            "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
        },
        {
          monster_id: 299,
          name: "Shapechanger",
          desc:
            "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 300,
          name: "Keen Smell",
          desc:
            "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          monster_id: 300,
          name: "Shapechanger",
          desc:
            "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 301,
          name: "Keen Hearing and Smell",
          desc:
            "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 301,
          name: "Pounce (Tiger or Hybrid Form Only)",
          desc:
            "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action."
        },
        {
          monster_id: 301,
          name: "Shapechanger",
          desc:
            "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 302,
          name: "Keen Hearing and Smell",
          desc:
            "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 302,
          name: "Shapechanger",
          desc:
            "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          monster_id: 304,
          name: "Sunlight Sensitivity",
          desc:
            "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 305,
          name: "Consume Life",
          desc:
            "As a bonus action, the will-o'-wisp can target one creature it can see within 5 ft. of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points."
        },
        {
          monster_id: 305,
          name: "Ephemeral",
          desc: "The will-o'-wisp can't wear or carry anything."
        },
        {
          monster_id: 305,
          name: "Incorporeal Movement",
          desc:
            "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        },
        {
          monster_id: 305,
          name: "Variable Illumination",
          desc:
            "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action."
        },
        {
          monster_id: 306,
          name: "Keen Hearing and Smell",
          desc:
            "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 306,
          name: "Pack Tactics",
          desc:
            "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 306,
          name: "Snow Camouflage",
          desc:
            "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
        },
        {
          monster_id: 307,
          name: "Keen Hearing and Smell",
          desc:
            "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 307,
          name: "Pack Tactics",
          desc:
            "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
        },
        {
          monster_id: 308,
          name: "Keen Hearing and Smell",
          desc:
            "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          monster_id: 309,
          name: "Incorporeal Movement",
          desc:
            "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        },
        {
          monster_id: 309,
          name: "Sunlight Sensitivity",
          desc:
            "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          monster_id: 311,
          name: "Earth Glide",
          desc:
            "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
        },
        {
          monster_id: 311,
          name: "Stone Camouflage",
          desc:
            "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        {
          monster_id: 311,
          name: "Treasure Sense",
          desc:
            "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it."
        },
        {
          monster_id: 312,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 315,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 317,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 318,
          name: "Amphibious",
          desc: "The dragon can breathe air and water."
        },
        {
          monster_id: 321,
          name: "Ice Walk",
          desc:
            "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment."
        },
        {
          monster_id: 322,
          name: "Undead Fortitude",
          desc:
            "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
        }
      ]);
    });
};
