const { Schema, model, models } = require('mongoose');

const ClassSchema = new Schema({
// Create a username property of type String that is required
name: {
  type: String,
  required: true
},
// Create a password property of type String that is required
instructor: {
  type: String,
  required: true
},
//Time of class stored as a UNIX timestamp
time: {
    type: Number,
    required:true
},
description: {
    type: String,
    required: true
},
//Location is a string containing the full address of the class
location: {
    type: String,
    required: true
},
//Latitude representation of above address
latitude: {
    type: String,
    required:true
},
//Longitude representation of above address
longitude: {
    type: String,
    required:true
}
})

module.exports = models.User || model('User', UserSchema)
