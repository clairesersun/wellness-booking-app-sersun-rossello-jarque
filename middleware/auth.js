module.exports = function (req, res, next) {
    if (req.session.isLoggedIn) {
      return next()
    }
    // what is this redirect URL??? res.redirect('/admin/login')
  }