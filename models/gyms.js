'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let gymSchema = new Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model('Gym', gymSchema);
