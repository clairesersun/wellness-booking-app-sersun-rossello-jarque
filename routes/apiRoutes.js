const router = require('express').Router()
const controllers = require('../controllers')
const checkAuth = require('../middleware/auth')

// admin signUp/login/logout/
router.post('/signUp', controllers.auth.signUp)
router.post('/login', controllers.auth.login)
router.get('/logout', controllers.auth.logout)

//profile & edit account
router.get('/profile', controllers.profile)
router.get('/account', controllers.account)
router.get('/logout', controllers.auth.logout)

router
  .route('/account/:id')
  .put(checkAuth, controllers.account.update) // edit post
  .delete(checkAuth, controllers.account.remove) // remove post

//specific class details
router
    .route('/classes/:id')
    .put(checkAuth, controllers.classdetails.cancelBooking)
    .put(checkAuth, controllers.classdetails.book)
    .get(checkAuth, controllers.classdetails.classDetails)

//schedule
router
    .route('/booked-classes/')
    .get(checkAuth, controllers.classes.bookedClasses)

//classes
router
    .route('/classes/')
    .get(checkAuth, controllers.classes.classes)

module.exports = router