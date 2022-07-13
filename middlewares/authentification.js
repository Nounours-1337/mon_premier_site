const auth = (req, res, next) => {
  res.locals.user = false;

  if (req.session.user) {
      res.locals.user = req.session.user;
      return next();
  }

  req.status = 403;
  return next(new Error('Forbidden'));
};

module.exports = auth;