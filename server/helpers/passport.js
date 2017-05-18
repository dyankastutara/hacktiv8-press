var bcrypt = require('bcrypt')
var Author = require('../models/author')
methode = {}

methode.passport = function(username, password, next) {
  Author.findOne({username: username}, (err, user) => {
    if (err) {return next(err);}
    if (user==null) { return next(null,{msg:'username not match anyone'} ); }
    if (!bcrypt.compareSync(password, user.password)) {return next(null, {msg:'password not match with username'}); }
    return next(null, user);
  });
 }

module.exports = methode
