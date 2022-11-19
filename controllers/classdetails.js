const { Classes } = require('../models/Index')

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
    try{
        const slug = req.params.slug
    // TODO: Find a single post
    // find a single class by slug
    // you will need to use .lean() or .toObject()
    const classes = await Classes.findOne({slug}).lean()
    
    classes.when = new Date(classes.time).toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        time: 'numeric',
    })

    res.render('class-details', {classes, isLoggedIn: req.session.isLoggedIn})
    } catch(err) {
    res.status(500).send(err.message)
    }
}

//Renders the view of the next booked class


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
}