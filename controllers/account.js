const account = require("../models/account")

//update account
async function update(req, res) {
    try {
      const accountId = req.params.id
      const account = await account.findOneAndUpdate(
        {_id: accountId},
        {$set: {username, password}},
        {new: true}
      )
  
      return res
      .status(200)
      .json(post) 
  
    } catch(err) {
      res.status(500).send(err.message)
    }
  }


//delete account
async function remove(req, res, next) {
    const accountId = req.params.id
    try {
      const accountId = req.params.id
      const post = await account.findOneAndDelete({_id: accountId})
      return res.status(200).json(post)
    } catch(err) {
      res.status(500).json(err)
    }
  }
  
  module.exports = {
    update,
    remove
  }
