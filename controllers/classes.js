const { ClassInfo } = require('../models')

//Renders the view of all classes by date
async function classes (req, res, next) {
    try {
        const classId = req.params

        const classes = await ClassInfo.findBy({when})
        classes.time = new Date(classes.time).toLocaleString('en-US', {
            time: 'numeric',
        })

        res.render('/classes', {classes, isLoggedIn: req.session.isLoggedIn})
    } catch(err) {
    res.status(500).send(err.message)
    }
}

//Renders the view of booked classes and the next booked class

async function bookedClasses (req, res, next) {
    try {
        const classId = req.params

        const classDetails = await ClassInfo.findAll()
        classDetails.when = new Date(classDetails.when).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            time: 'numeric',
        })

        const nextClassDetails = await ClassInfo.findOne({when: new Date("11/28/2022 7:00 AM EDT")})
        nextClassDetails.when = new Date(nextClassDetails.when).toLocaleString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            time: 'numeric',
        })
        res.render('/booked-classes', {classDetails, nextClassDetails, isLoggedIn: req.session.isLoggedIn})
    } catch(err) {
    res.status(500).send(err.message)
    }
}




module.exports = {
    bookedClasses,
    classes
}