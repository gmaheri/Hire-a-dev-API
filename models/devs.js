const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Dev Schema & model
const DevSchema = new Schema({
  name: {
    type : String,
    required : [true, 'Name field is required']
  },

  level : {
    type : string
  },

  available : {
    type : Boolean,
    default : false
  }

  //add in geo location
});

//Create model
const Dev = mongoose.model('dev', DevSchema);

module.exports = Dev;
