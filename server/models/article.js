var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
	title : {type : String, require: true},
	content : {type : String, require: true},
	author_id : [{type : String, ref: 'Author'}]
}, {timestamps : true})

var Article = mongoose.model('Article', ArticleSchema)

module.exports = Article