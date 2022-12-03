const { User, account } = require('../models')
const profile = require('../models/profile')

async function get(req, res) {
    try {
      const slug = req.params.slug
      const post = await account.findOne({slug}).lean()
      .populate({path: 'id'})
     
      User.createdAt = new Date(User.createdAt).toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      })
      return profile
      
  }catch(err) {
    res.status(500).send(err.message)
  }
}

  module.exports = { get }