const express = require('express');
const router = express.Router();

const Monsters = require('./monstersModel.js');
const requireToken = require("../middleware/requireToken-MW.js")

router.get('/', (req, res) => {
  Monsters.find(req.query)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(
      { message: "you've met with a terrible fate, haven't you?", error: err }
    ))
});

router.get('/crMax/:cr', (req, res) => {
  Monsters.findMaxCr(req.params.cr, req.query)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(
      { message: "you've met with a terrible fate, haven't you?", error: err }
    ))
});

router.get('/id/:id', (req, res) => {
  const id = req.params.id
  Monsters.findById(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(
      { message: "you've met with a terrible fate, haven't you?", error: err }
  ))
});

router.get('/name/:name', (req, res) => {
  const name = req.params.name
  Monsters.findByName(name)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(
      { message: "you've met with a terrible fate, haven't you?", error: err }
  ))
});

module.exports = router;