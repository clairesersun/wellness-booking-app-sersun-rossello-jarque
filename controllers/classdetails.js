const { ClassInfo } = require('../models')

//Renders the class details
async function classDetails (req, res, next) {
    try {
        const classId = req.params
    //Find a single class by when
    const classDetails = await ClassInfo.findById(classId)
    
    classDetails.when = new Date(classDetails.when).toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        time: 'numeric',
    })
    
    classDetails.date = new Date(classDetails.date).toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    })
    classDetails.time = new Date(classDetails.time).toLocaleString('en-US', {
        time: 'numeric',
    })

    res.render('classes/:id', {classDetails, isLoggedIn: req.session.isLoggedIn})
    } catch(err) {
    res.status(500).send(err.message)
    }
}

//remove booking + add booking
async function cancelBooking(req, res) {
    try {
    //   const {booked} = req.body
      const classId = req.params.id
      // find and update the class with the booked = false
      const classUnbooked = await ClassInfo.findOneAndUpdate(
        {_id: classId},
        {$set: {booked} = false}
      )
      return res
        .status(200)
        .json(classUnbooked)
        .redirect('./booked-classes/')
    } catch(err) {
      res.status(500).send(err.message)
    }
  }

  async function book(req, res) {
    try {
    //   const {booked} = req.body
      const classId = req.params.id
      // find and update the class with the booked = false
      const bookClass = await ClassInfo.findOneAndUpdate(
        {_id: classId},
        {$set: {booked} = true}
      )
      return res
        .status(200)
        .json(bookClass)
        .redirect('./booked-classes/')
    } catch(err) {
      res.status(500).send(err.message)
    }
  }

module.exports = {
    classDetails,
    cancelBooking,
    book
}