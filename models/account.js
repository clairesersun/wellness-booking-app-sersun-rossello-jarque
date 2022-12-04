const { Schema, model, models } = require('mongoose');

const accountSchema = new Schema({
    accountID: {
    type: String,
    required: true,
    unique: true
  }
})


module.exports = models.account || model('account', accountSchema)