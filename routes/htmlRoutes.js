const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

router.get('/admin', (req, res) => {
  if (req.session.isLoggedIn)
    return res.redirect('/')
  res.redirect('/admin/login')
})

router.get("signUp", async(req, res) => {
  if (req.session.isLoggedIn)
    return res.redirect('/')
  res.render("signUp", {error: req.query.error});
})

// admin login page
router.get("/login", async (req, res) => {
  if (req.session.isLoggedIn)
    return res.redirect('/')
  res.render("login", {error: req.query.error});
});

module.exports = router;
