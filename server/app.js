var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/dyankastutara', function(){
	console.log("Connected")
})

var app = express()



app.listen(3000)