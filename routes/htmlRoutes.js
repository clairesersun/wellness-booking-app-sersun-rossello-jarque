const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

router.get('/admin', (req, res) => {
    if (req.session.isLoggedIn)
      return res.redirect('/')
    res.redirect('/admin/login')
  })

// admin login page
router.get("/admin/login", async (req, res) => {
    if (req.session.isLoggedIn)
      return res.redirect('/')
    res.render("login", {error: req.query.error});
  });

//display booked class info
router.get("/booked-classes/", checkAuth, controllers.classes.bookedClasses)
//display all classes
router.get("/classes", checkAuth, controllers.classes.classes)
//display class info
router.get("/classes/:id", checkAuth, controllers.classdetails.classDetails)

//get profile page
router.get("/profile", function (req, res, next) {
    var user = req.user;
  req.render('profile', {title: 'profile', user: user});
});


module.exports = router;