const express = require('express');
const router = express.Router();
const Devk = require('../models/devs')

//get a list of devs from the database
router.get('/dev', (req, res, next) => {
  /*Devk.find({}).then((person) => {
    res.send(person)
  })*/
  Devk.geoNear(
    {type : 'Point', coordinate : [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
   {maxDistance : 100000, sperical: true}
    ).then((person) => {
      res.send(perrson)
    });
});

//add a dev to the database
router.post('/dev', (req, res, next) => {
  Devk.create(req.body).then((person) => {
    res.send(person);
  }).catch(next);
});

//update a dev in the database
router.put('/dev/:id', (req,res, next) => {
  Devk.findByIdAndUpdate({_id: req.body.params}, req.body).then(() => {
    Devk.findOne({_id: req.body.id}).then((person) => {
      res.send(person);
    })
  })
});

//delete a dev from the database
router.delete('/dev/:id', (req, res, next) => {
  Devk.findByIdAndRemove({_id: req.params.id}).then((person) => {
    res.send(person)
  })
});

module.exports = router;
