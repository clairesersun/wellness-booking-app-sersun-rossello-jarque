const router = require('express').Router()
const controllers = require('../controllers')
const checkAuth = require('../middleware/auth')

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
