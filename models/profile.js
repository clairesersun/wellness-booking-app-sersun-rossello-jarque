const { Schema, model, models } = require('mongoose');

const userInfoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
      },
    })

module.exports = models.profile || model('profile', userInfoSchema)