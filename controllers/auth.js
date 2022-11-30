const bcrypt = require('bcrypt')
const {User} = require('../models')

async function signUp(req, res) {
  try {
    const {username, password} = req.body
    if (!username || !password) {
      return res.status(400).send()
    }

    const userExists = await User.findOne({username}).lean()
    if (!!userExists) {
      return res.status(400).send()
    } else {
      const hash = await bcrypt.hash(password, 10)
      const result = await User.create({
        username:username,
        password:hash
      })

      return res.redirect("/login")
    }
  } catch(err) {
    res.status(500).send(err.message)
  }
}

async function login(req, res) {
  try {
    const {username, password} = req.body
    if (!username || !password)
      return res.redirect('/login?error=true')
    const user = await User.findOne({username}).lean()
    if (!user)
      return res.redirect('/login?error=true')
    const { password: hash } = user
    const isLoggedIn = await bcrypt.compare(password, hash)
    if (!isLoggedIn)
      return res.redirect('/login?error=true')

    req.session.isLoggedIn = isLoggedIn
    req.session.save(() => res.redirect('/'))
  } catch(err) {
    res.status(500).send(err.message)
  }
}

async function logout(req, res) {
  req.session.destroy(() => res.redirect('/'))
}

module.exports = { signUp, login, logout }
