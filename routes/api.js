const express = require('express');
const router = express.Router();
const Dev = require('../models/devs')

//get a list of devs from the database
router.get('/dev', (req, res) => {
  res.send({type: 'GET'});
});

//add a dev to the database
router.post('/dev/:id', (req, res) => {
  Dev.create(req.body)
  res.send({
    type : 'POST',
    name : req.body.name,
    age : req.body.age


  });
});

//update a dev in the database
router.put('/dev/:id', (req,res) => {
  res.send({type : 'PUT'});
});

//delete a dev from the database
router.delete('/dev/:id', (req, res) => {
  res.send({type : 'DELETE'});
});

module.exports = router;
