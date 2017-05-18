var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var passportHelper = require('./helpers/passport');
var cors = require('cors')

mongoose.connect('mongodb://localhost/dyankastutara', ()=>{
	console.log("Database Connected")
})

var Authors = require('./routes/authors');
var Article = require('./routes/articles');


var app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
passport.use(new localStrategy(passportHelper.passport))

app.use('/authors', Authors);
app.use('/article', Article);


app.listen(3000)
