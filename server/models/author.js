var mongoose = require('mongoose')
var Schema = mongoose.Schema

var authorSchema = new Schema({
	name : {type : String, require: true},
	username : {type : String, require: true},
	password : {type : String, require: true}
}, {timestamps : true})

var Author = mongoose.model('Author', authorSchema)

module.exports = Author