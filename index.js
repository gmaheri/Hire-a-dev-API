const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

//set up express app
const app = express();

//connect to Mongodb
mongoose.connect('mongoodb://localhost/devsdb')
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);




//listen to requests
app.listen(process.env.port || 4000, function(){
  console.log('Server in up and running on port 4000')
});


