const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create geolocation schema
const GeoSchema = new Schema({
  type : {
    type : String,
    default : "Point"
  },
  coordinates : {
    type: [Number],
    index : '2dsphere'
  }

});

//create Dev Schema & model
const DevSchema = new Schema({
  name: {
    type : String,
    required : [true, 'Name field is required']
  },

  level : {
    type : String
  },

  available : {
    type : Boolean,
    default : false
  },
  geometry: GeoSchema
});

//Create model
const Devk = mongoose.model('devs', DevSchema);

module.exports = Devk;
