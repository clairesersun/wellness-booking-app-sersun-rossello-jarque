const { ClassInfo } = require('../models')

//Renders the view of all class details for particular day

// async function classDetails(req, res) {
//     try {
//         // get by single tag id if included
//         const mongoQuery = {}
//         if (req.query.tag) {
//           const tagDoc =  await Tag.findOne({name: req.query.tag}).lean()
//           if (tagDoc)
//             mongoQuery.tags = {_id: tagDoc._id }
//         }
//         const postDocs = await Post
//           .find(mongoQuery)
//           .populate({
//             path: 'tags'
//           })
//           .sort({createdAt: 'DESC'})
//         const posts = postDocs.map(post => {
//           post = post.toObject()
//           post.createdAt = new Date(post.createdAt).toLocaleString('en-US', {
//             weekday: 'short',
//             month: 'short',
//             day: 'numeric',
//             year: 'numeric',
//           })
//           return post
//         })
//         res.render('index', {
//           posts,
//           isLoggedIn: req.session.isLoggedIn,
//           tag: req.query.tag
//         })
//       } catch(err) {
//         res.status(500).send(err.message)
//       }}

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