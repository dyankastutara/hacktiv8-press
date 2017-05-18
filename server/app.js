var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/dyankastutara', ()=>{
	console.log("Database Connected")
})

var Authors = require('./routes/authors');
var Article = require('./routes/articles');


var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/authors', Authors);
app.use('/article', Article);


app.listen(3000)