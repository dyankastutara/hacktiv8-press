var mongoose = require('mongoose')
var Schema = mongoose.Schema

var authorSchema = new Schema({
	name : {type : String, required: true},
	username : {type : String, required: true},
	password : {type : String, required: true}
}, {timestamps : true})

var Author = mongoose.model('Author', authorSchema)

module.exports = Author