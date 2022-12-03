const router = require('express').Router()
const controllers = require('../controllers')
const checkAuth = require('../middleware/auth')

//profile & edit account
router.get('/profile', controllers.profile)
router.get('/account', controllers.account)
router.get('/logout', controllers.auth.logout)

router
  .route('/account/:id')
  .put(checkAuth, controllers.account.update) // edit post
  .delete(checkAuth, controllers.account.remove) // remove post

module.exports = router