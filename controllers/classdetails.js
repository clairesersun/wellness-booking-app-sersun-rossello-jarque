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

    res.render('classes/:slug', {classDetails, isLoggedIn: req.session.isLoggedIn})
    } catch(err) {
    res.status(500).send(err.message)
    }
}

//remove booking + add booking
async function updateBooking (req, res, next) {
// how????
}


// // Renders the create post page
// async function createPost(req, res, next) {
//   const tags = await Tag.find().lean().catch(next)
//   res.render('write-post', {tags, isLoggedIn: req.session.isLoggedIn})
// }

// // Renders the edit post page
// async function editPost(req, res) {
//   try {
//     const {slug} = req.params
//     let [post, tags] = await Promise.all([
//       Post.findOne({slug}).lean(),
//       Tag.find().lean()
//     ])
//     //must convert _ids to strings
//     post.tags = post.tags.map(tag => tag.toString())
//     tags = tags.map(tag => {
//       if(post.tags.includes(tag._id.toString()))
//         tag.checked = true
//       return tag
//     })
//     res.render('write-post', {post, tags, isLoggedIn: req.session.isLoggedIn})
//   } catch(err) {
//     res.status(500).send(err.message)
//   }
// }

module.exports = {
    classDetails,
    updateBooking
}