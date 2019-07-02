exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("speed")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("speed").insert([
        {
          monster_id: 1,
          walk: 10,
          swim: 40
        },
        {
          monster_id: 2,
          walk: 30
        },
        {
          monster_id: 3,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 4,
          walk: 40,
          fly: 80,
          burrow: 30
        },
        {
          monster_id: 5,
          walk: 40,
          fly: 80,
          burrow: 40
        },
        {
          monster_id: 6,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 7,
          walk: 40,
          fly: 80,
          climb: 40
        },
        {
          monster_id: 8,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 9,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 10,
          walk: 40,
          fly: 80,
          climb: 40
        },
        {
          monster_id: 11,
          walk: 40,
          fly: 80
        },
        {
          monster_id: 12,
          walk: 40,
          swim: 40,
          fly: 80,
          burrow: 30
        },
        {
          monster_id: 13,
          fly: 90,
          hover: "TRUE"
        },
        {
          monster_id: 14,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 15,
          walk: 40,
          fly: 80,
          burrow: 40
        },
        {
          monster_id: 16,
          walk: 40,
          fly: 80,
          burrow: 40
        },
        {
          monster_id: 17,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 18,
          walk: 40,
          fly: 80,
          climb: 40
        },
        {
          monster_id: 19,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 20,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 21,
          walk: 40,
          fly: 80,
          climb: 40
        },
        {
          monster_id: 22,
          walk: 40,
          fly: 80
        },
        {
          monster_id: 23,
          walk: 40,
          swim: 40,
          fly: 80,
          burrow: 40
        },
        {
          monster_id: 24,
          walk: 40,
          fly: 60
        },
        {
          monster_id: 25,
          walk: 25
        },
        {
          monster_id: 26,
          walk: 30,
          burrow: 10
        },
        {
          monster_id: 27,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 28,
          walk: 30
        },
        {
          monster_id: 29,
          walk: 30
        },
        {
          monster_id: 30,
          walk: 20
        },
        {
          monster_id: 31,
          walk: 20
        },
        {
          monster_id: 32,
          walk: 50
        },
        {
          monster_id: 33,
          walk: 30
        },
        {
          monster_id: 34,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 35,
          walk: 20,
          burrow: 5
        },
        {
          monster_id: 36,
          walk: 40,
          fly: 80
        },
        {
          monster_id: 37,
          walk: 30
        },
        {
          monster_id: 38,
          walk: 30
        },
        {
          monster_id: 39,
          walk: 30
        },
        {
          monster_id: 40,
          walk: 20
        },
        {
          monster_id: 41,
          walk: 5,
          fly: 30
        },
        {
          monster_id: 42,
          walk: 30
        },
        {
          monster_id: 43,
          walk: 50,
          climb: 40
        },
        {
          monster_id: 44,
          walk: 30
        },
        {
          monster_id: 45,
          walk: 40,
          climb: 30
        },
        {
          monster_id: 46,
          walk: 30,
          swim: 30,
          fly: 60
        },
        {
          monster_id: 47,
          walk: 20,
          climb: 20
        },
        {
          monster_id: 48,
          walk: 40
        },
        {
          monster_id: 49,
          walk: 10,
          fly: 60
        },
        {
          monster_id: 50,
          walk: 30,
          fly: 60,
          burrow: 15
        },
        {
          monster_id: 51,
          walk: 40
        },
        {
          monster_id: 52,
          walk: 40,
          fly: 40
        },
        {
          monster_id: 53,
          walk: 30,
          fly: 60,
          burrow: 15
        },
        {
          monster_id: 54,
          walk: 30,
          swim: 30,
          fly: 60
        },
        {
          monster_id: 55,
          walk: 40,
          climb: 30
        },
        {
          monster_id: 56,
          walk: 30
        },
        {
          monster_id: 57,
          walk: 40,
          burrow: 40
        },
        {
          monster_id: 58,
          walk: 50
        },
        {
          monster_id: 59,
          walk: 40,
          climb: 30
        },
        {
          monster_id: 60,
          walk: 50
        },
        {
          monster_id: 61,
          walk: 30
        },
        {
          monster_id: 62,
          walk: 30,
          fly: 60
        },
        {
          monster_id: 63,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 64,
          walk: 20
        },
        {
          monster_id: 65,
          walk: 10,
          fly: 40
        },
        {
          monster_id: 66,
          walk: 40
        },
        {
          monster_id: 67,
          walk: 20,
          fly: 40
        },
        {
          monster_id: 68,
          walk: 30
        },
        {
          monster_id: 69,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 70,
          walk: 30,
          fly: 60,
          climb: 30
        },
        {
          monster_id: 71,
          walk: 30,
          fly: 90
        },
        {
          monster_id: 72,
          walk: 20,
          swim: 20
        },
        {
          monster_id: 73,
          walk: 20,
          swim: 20
        },
        {
          monster_id: 74,
          walk: 30
        },
        {
          monster_id: 75,
          walk: 30
        },
        {
          monster_id: 76,
          walk: 10,
          fly: 30
        },
        {
          monster_id: 77,
          walk: 40
        },
        {
          monster_id: 78,
          walk: 20
        },
        {
          monster_id: 79,
          walk: 50
        },
        {
          monster_id: 80,
          walk: 30,
          fly: 90
        },
        {
          monster_id: 81,
          walk: 50
        },
        {
          monster_id: 82,
          walk: 30,
          fly: 90
        },
        {
          monster_id: 83,
          walk: 30
        },
        {
          monster_id: 84,
          walk: 40
        },
        {
          monster_id: 85,
          walk: 20,
          swim: 40
        },
        {
          monster_id: 86,
          walk: 20
        },
        {
          monster_id: 87,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 88,
          walk: 30
        },
        {
          monster_id: 89,
          walk: 30
        },
        {
          monster_id: 90,
          walk: 30
        },
        {
          monster_id: 91,
          walk: 25
        },
        {
          monster_id: 92,
          walk: 30,
          fly: 30
        },
        {
          monster_id: 93,
          walk: 10,
          fly: 60
        },
        {
          monster_id: 94,
          walk: 30,
          burrow: 30
        },
        {
          monster_id: 95,
          walk: 40,
          fly: 60
        },
        {
          monster_id: 96,
          walk: 40
        },
        {
          monster_id: 97,
          walk: 50
        },
        {
          monster_id: 98,
          walk: 30,
          fly: 60
        },
        {
          monster_id: 99,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 100,
          walk: 40
        },
        {
          monster_id: 101,
          walk: 50
        },
        {
          monster_id: 102,
          walk: 30
        },
        {
          monster_id: 103,
          walk: 30
        },
        {
          monster_id: 104,
          walk: 30,
          swim: 30,
          fly: 60
        },
        {
          monster_id: 105,
          walk: 0,
          fly: 50,
          hover: "TRUE"
        },
        {
          monster_id: 106,
          walk: 20,
          swim: 20
        },
        {
          monster_id: 107,
          walk: 40
        },
        {
          monster_id: 108,
          walk: 30,
          fly: 60
        },
        {
          monster_id: 109,
          walk: 15
        },
        {
          monster_id: 110,
          walk: 30
        },
        {
          monster_id: 111,
          walk: 0,
          fly: 40,
          hover: "TRUE"
        },
        {
          monster_id: 112,
          walk: 30
        },
        {
          monster_id: 113,
          walk: 40,
          climb: 40
        },
        {
          monster_id: 114,
          walk: 30,
          burrow: 10
        },
        {
          monster_id: 115,
          walk: 10,
          fly: 60
        },
        {
          monster_id: 116,
          walk: 40
        },
        {
          monster_id: 117,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 118,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 119,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 120,
          walk: 30,
          swim: 50
        },
        {
          monster_id: 121,
          walk: 10,
          fly: 80
        },
        {
          monster_id: 122,
          walk: 60
        },
        {
          monster_id: 123,
          walk: 30
        },
        {
          monster_id: 124,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 125,
          walk: 40
        },
        {
          monster_id: 126,
          walk: 50
        },
        {
          monster_id: 127,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 128,
          walk: 10,
          swim: 60
        },
        {
          monster_id: 129,
          walk: 5,
          fly: 60
        },
        {
          monster_id: 130,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 131,
          walk: 30
        },
        {
          monster_id: 132,
          walk: 30
        },
        {
          monster_id: 133,
          walk: 40
        },
        {
          monster_id: 134,
          walk: 0,
          swim: 40
        },
        {
          monster_id: 135,
          swim: 50
        },
        {
          monster_id: 136,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 137,
          walk: 20,
          swim: 40
        },
        {
          monster_id: 138,
          walk: 10,
          fly: 60
        },
        {
          monster_id: 139,
          walk: 10,
          swim: 50,
          fly: 50
        },
        {
          monster_id: 140,
          walk: 40
        },
        {
          monster_id: 141,
          walk: 40,
          climb: 40
        },
        {
          monster_id: 142,
          walk: 10,
          swim: 10
        },
        {
          monster_id: 143,
          walk: 40
        },
        {
          monster_id: 144,
          walk: 30
        },
        {
          monster_id: 145,
          walk: 30
        },
        {
          monster_id: 146,
          walk: 40
        },
        {
          monster_id: 147,
          walk: 30
        },
        {
          monster_id: 148,
          walk: 30,
          swim: 30,
          fly: 60
        },
        {
          monster_id: 149,
          walk: 40
        },
        {
          monster_id: 150,
          walk: 10,
          climb: 10
        },
        {
          monster_id: 151,
          walk: 30,
          swim: 30,
          fly: 60
        },
        {
          monster_id: 152,
          walk: 30
        },
        {
          monster_id: 153,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 154,
          walk: 30,
          fly: 80
        },
        {
          monster_id: 155,
          walk: 30
        },
        {
          monster_id: 156,
          walk: 30
        },
        {
          monster_id: 157,
          walk: 40
        },
        {
          monster_id: 158,
          walk: 40,
          fly: 60
        },
        {
          monster_id: 159,
          walk: 30
        },
        {
          monster_id: 160,
          walk: 20,
          fly: 40
        },
        {
          monster_id: 161,
          walk: 10,
          fly: 60
        },
        {
          monster_id: 162,
          walk: 50
        },
        {
          monster_id: 163,
          walk: 30
        },
        {
          monster_id: 164,
          walk: 40
        },
        {
          monster_id: 165,
          walk: 40,
          fly: 60
        },
        {
          monster_id: 166,
          walk: 30
        },
        {
          monster_id: 167,
          walk: 20,
          fly: 40
        },
        {
          monster_id: 168,
          walk: 20,
          fly: 60
        },
        {
          monster_id: 169,
          swim: 40
        },
        {
          monster_id: 170,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 171,
          walk: 50
        },
        {
          monster_id: 172,
          walk: 40
        },
        {
          monster_id: 173,
          walk: 30,
          fly: 30
        },
        {
          monster_id: 174,
          walk: 20,
          fly: 40
        },
        {
          monster_id: 175,
          walk: 50,
          fly: 50,
          hover: "TRUE"
        },
        {
          monster_id: 176,
          walk: 30
        },
        {
          monster_id: 177,
          walk: 40
        },
        {
          monster_id: 178,
          swim: 60
        },
        {
          monster_id: 179,
          walk: 30
        },
        {
          monster_id: 180,
          walk: 30
        },
        {
          monster_id: 181,
          walk: 20,
          swim: 60
        },
        {
          monster_id: 182,
          walk: 30
        },
        {
          monster_id: 183,
          walk: 15
        },
        {
          monster_id: 184,
          walk: 30
        },
        {
          monster_id: 185,
          walk: 50
        },
        {
          monster_id: 186,
          walk: 20,
          climb: 20
        },
        {
          monster_id: 187,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 188,
          walk: 30
        },
        {
          monster_id: 189,
          walk: 30,
          fly: 30
        },
        {
          monster_id: 190,
          walk: 30
        },
        {
          monster_id: 191,
          walk: 40
        },
        {
          monster_id: 192,
          walk: 30,
          fly: 50
        },
        {
          monster_id: 193,
          walk: 40
        },
        {
          monster_id: 194,
          walk: 40
        },
        {
          monster_id: 195,
          walk: 30
        },
        {
          monster_id: 196,
          walk: 10,
          swim: 40
        },
        {
          monster_id: 197,
          walk: 10,
          swim: 40
        },
        {
          monster_id: 198,
          walk: 15
        },
        {
          monster_id: 199,
          walk: 40
        },
        {
          monster_id: 200,
          walk: 40
        },
        {
          monster_id: 201,
          walk: 40
        },
        {
          monster_id: 202,
          walk: 20
        },
        {
          monster_id: 203,
          walk: 20
        },
        {
          monster_id: 204,
          walk: 20,
          fly: 30
        },
        {
          monster_id: 205,
          walk: 30
        },
        {
          monster_id: 206,
          walk: 60,
          fly: 90
        },
        {
          monster_id: 207,
          walk: 30
        },
        {
          monster_id: 208,
          walk: 10,
          climb: 10
        },
        {
          monster_id: 209,
          walk: 5,
          swim: 30
        },
        {
          monster_id: 210,
          walk: 40
        },
        {
          monster_id: 211,
          walk: 30
        },
        {
          monster_id: 212,
          walk: 30,
          fly: 30
        },
        {
          monster_id: 213,
          walk: 30
        },
        {
          monster_id: 214,
          walk: 30
        },
        {
          monster_id: 215,
          walk: 5,
          fly: 60
        },
        {
          monster_id: 216,
          walk: 40
        },
        {
          monster_id: 217,
          walk: 50,
          climb: 40
        },
        {
          monster_id: 218,
          walk: 60,
          fly: 90
        },
        {
          monster_id: 219,
          walk: 30,
          climb: 30
        },
        {
          monster_id: 220,
          walk: 30,
          fly: 60
        },
        {
          monster_id: 221,
          walk: 40,
          fly: 120
        },
        {
          monster_id: 222,
          walk: 20,
          swim: 40
        },
        {
          monster_id: 223,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 224,
          walk: 40,
          swim: 30
        },
        {
          monster_id: 225,
          walk: 40
        },
        {
          monster_id: 226,
          walk: 25
        },
        {
          monster_id: 227,
          walk: 15,
          fly: 60
        },
        {
          monster_id: 228,
          walk: 50,
          burrow: 30
        },
        {
          monster_id: 229,
          walk: 40
        },
        {
          monster_id: 230,
          swim: 40
        },
        {
          monster_id: 231,
          walk: 40
        },
        {
          monster_id: 232,
          walk: 20
        },
        {
          monster_id: 233,
          walk: 10,
          fly: 50
        },
        {
          monster_id: 234,
          walk: 30,
          fly: 60,
          climb: 30
        },
        {
          monster_id: 235,
          swim: 40
        },
        {
          monster_id: 236,
          walk: 30,
          burrow: 20
        },
        {
          monster_id: 237,
          walk: 40
        },
        {
          monster_id: 238,
          walk: 60
        },
        {
          monster_id: 239,
          walk: 20,
          fly: 120
        },
        {
          monster_id: 240,
          walk: 10,
          climb: 10
        },
        {
          monster_id: 241,
          walk: 10
        },
        {
          monster_id: 242,
          walk: 40
        },
        {
          monster_id: 243,
          walk: 40
        },
        {
          monster_id: 244,
          walk: 30,
          swim: 40
        },
        {
          monster_id: 245,
          walk: 30
        },
        {
          monster_id: 246,
          walk: 40
        },
        {
          monster_id: 247,
          walk: 10
        },
        {
          monster_id: 248,
          walk: 30
        },
        {
          monster_id: 249,
          walk: 30,
          swim: 40
        },
        {
          monster_id: 250,
          swim: 20
        },
        {
          monster_id: 251,
          walk: 40
        },
        {
          monster_id: 252,
          walk: 20,
          swim: 20
        },
        {
          monster_id: 253,
          walk: 30
        },
        {
          monster_id: 254,
          walk: 0
        },
        {
          monster_id: 255,
          walk: 30,
          fly: 60
        },
        {
          monster_id: 256,
          walk: 30
        },
        {
          monster_id: 257,
          walk: 50,
          fly: 150
        },
        {
          monster_id: 258,
          walk: 0,
          fly: 50,
          hover: "TRUE"
        },
        {
          monster_id: 259,
          walk: 20,
          climb: 20
        },
        {
          monster_id: 260,
          walk: 40
        },
        {
          monster_id: 261,
          walk: 10,
          fly: 40
        },
        {
          monster_id: 262,
          walk: 30
        },
        {
          monster_id: 263,
          walk: 30,
          fly: 30
        },
        {
          monster_id: 264,
          walk: 10,
          fly: 40
        },
        {
          monster_id: 265,
          walk: 40
        },
        {
          monster_id: 266,
          walk: 30
        },
        {
          monster_id: 267,
          walk: 50,
          swim: 50
        },
        {
          monster_id: 268,
          walk: 30,
          fly: 60
        },
        {
          monster_id: 269,
          walk: 0,
          fly: 30
        },
        {
          monster_id: 270,
          walk: 20,
          burrow: 5,
          climb: 20
        },
        {
          monster_id: 271,
          walk: 20,
          climb: 20
        },
        {
          monster_id: 272,
          walk: 20,
          climb: 20
        },
        {
          monster_id: 273,
          walk: 30,
          swim: 30
        },
        {
          monster_id: 274,
          walk: 0,
          swim: 40
        },
        {
          monster_id: 275,
          walk: 30
        },
        {
          monster_id: 276,
          walk: 10,
          fly: 50
        },
        {
          monster_id: 277,
          walk: 20,
          climb: 20
        },
        {
          monster_id: 278,
          walk: 5,
          fly: 30
        },
        {
          monster_id: 279,
          walk: 40
        },
        {
          monster_id: 280,
          walk: 30
        },
        {
          monster_id: 281,
          walk: 40
        },
        {
          monster_id: 282,
          walk: 30
        },
        {
          monster_id: 283,
          walk: 30
        },
        {
          monster_id: 284,
          walk: 50
        },
        {
          monster_id: 285,
          walk: 30
        },
        {
          monster_id: 286,
          walk: 50
        },
        {
          monster_id: 287,
          walk: 50
        },
        {
          monster_id: 288,
          walk: 30
        },
        {
          monster_id: 289,
          walk: 30
        },
        {
          monster_id: 290,
          walk: 30
        },
        {
          monster_id: 291,
          walk: 5
        },
        {
          monster_id: 292,
          walk: 40,
          fly: 60
        },
        {
          monster_id: 293,
          walk: 10,
          fly: 50
        },
        {
          monster_id: 294,
          walk: 60
        },
        {
          monster_id: 295,
          walk: 60
        },
        {
          monster_id: 296,
          walk: 30,
          swim: 90
        },
        {
          monster_id: 297,
          walk: 30
        },
        {
          monster_id: 298,
          walk: 30,
          notes: "40 ft., climb 30 ft. in bear or hybrid form"
        },
        {
          monster_id: 299,
          walk: 30,
          notes: "40 ft. in boar form"
        },
        {
          monster_id: 300,
          walk: 30
        },
        {
          monster_id: 301,
          walk: 30,
          notes: "40 ft. in tiger form"
        },
        {
          monster_id: 302,
          walk: 30,
          notes: "40 ft. in wolf form"
        },
        {
          monster_id: 303,
          walk: 30,
          swim: 30,
          fly: 60,
          burrow: 15
        },
        {
          monster_id: 304,
          walk: 30
        },
        {
          monster_id: 305,
          walk: 0,
          fly: 50,
          hover: "TRUE"
        },
        {
          monster_id: 306,
          walk: 50
        },
        {
          monster_id: 307,
          walk: 40
        },
        {
          monster_id: 308,
          walk: 50
        },
        {
          monster_id: 309,
          walk: 0,
          fly: 60,
          hover: "TRUE"
        },
        {
          monster_id: 310,
          walk: 20,
          fly: 80
        },
        {
          monster_id: 311,
          walk: 20,
          burrow: 20
        },
        {
          monster_id: 312,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 313,
          walk: 40,
          fly: 80,
          burrow: 40
        },
        {
          monster_id: 314,
          walk: 40,
          fly: 80,
          burrow: 20
        },
        {
          monster_id: 315,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 316,
          walk: 40,
          fly: 80,
          climb: 40
        },
        {
          monster_id: 317,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 318,
          walk: 40,
          swim: 40,
          fly: 80
        },
        {
          monster_id: 319,
          walk: 40,
          fly: 80,
          climb: 40
        },
        {
          monster_id: 320,
          walk: 40,
          fly: 80
        },
        {
          monster_id: 321,
          walk: 40,
          swim: 40,
          fly: 80,
          burrow: 20
        },
        {
          monster_id: 322,
          walk: 20
        }
      ]);
    });
};
