const router = require('express').Router()
const controllers = require('../controllers')
const checkAuth = require('../middleware/auth')

// admin signUp/login/logout/
router.post('/signUp', controllers.auth.signUp)
router.post('/login', controllers.auth.login)
router.get('/logout', controllers.auth.logout)

module.exports = router