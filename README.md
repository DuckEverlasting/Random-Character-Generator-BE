# Random-Character-Generator-BE

ENDPOINTS:

GET '/'
  - basic message to test if api is running
  - returns {"api": "up"}

GET '/monsters'
  - gets a list of all monsters
  - ****NOT RECOMMENDED**** (very long list)
  - returns [
      {
        "id": integer
        "slug": string,
        "name": string,
        "size": string,
        "type": string,
        "subtype": string,
        "group": string,
        "alignment": string,
        "armor_class": integer,
        "armor_desc": string,
        "hit_points": integer,
        "hit_dice": string,
        "speed": {
          "walk": integer,
          "swim": integer,
          "fly": integer,
          "burrow": integer,
          "climb": integer,
          "hover": boolean,
          "notes": string,
        },
        "strength": integer,
        "dexterity": integer,
        "constitution": integer,
        "intelligence": integer,
        "wisdom": integer,
        "charisma": integer,
        "strength_save": string,
        "dexterity_save": string,
        "constitution_save": string,
        "intelligence_save": string,
        "wisdom_save": string,
        "charisma_save": string,
        "perception": integer,
        "damage_vulnerabilities": string,
        "damage_resistances": string,
        "damage_immunities": string,
        "condition_immunities": string,
        "senses": string,
        "languages": string,
        "challenge_rating": string,
        "actions": {
          "name",
          "desc",
          "attack_bonus",
          "damage_dice",
          "damage_bonus"
        },
        "reactions": {
          "name",
          "desc"
        },
        "legendary_actions": {
          "name",
          "desc",
          "attack_bonus",
          "damage_dice",
        },
        "special_abilities": {
          "name",
          "desc",
          "attack_bonus",
          "damage_dice",
        },
        "terrain": string,
        "source": string
      }
    ]

GET '/monsters/?challenge_rating=&type=&alignment=&terrain=
  - gets an array of monsters that fall within the provided parameters
  - filters include:
    - cr
    - type
    - alignment
    - terrain

GET '/monsters/id/:id'
  - gets a monster by id
  - returns single monster object, as in above array

GET '/monsters/name/:name'
  - gets a monster by name
  - returns single monster object, as in above array