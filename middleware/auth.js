module.exports = function (req, res, next) {
    if (req.session.isLoggedIn) {
      return next()
    }
}