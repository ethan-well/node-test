const User =  require('../models/user');

exports.form = (req, res) => {
  res.render('register', {title: 'Register'});
}

exports.submit = (req, res, next) => {
  const data = req.body.user;
  const name = data.name;
  const pass = data.pass;
}