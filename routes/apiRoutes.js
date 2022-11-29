const router = require('express').Router()
const controllers = require('../controllers')
const checkAuth = require('../middleware/auth')

// admin login/logout
router.post('/login', controllers.auth.login)
router.get('/logout', controllers.auth.logout)

module.exports = router