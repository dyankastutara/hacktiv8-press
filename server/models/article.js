var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
	title : {type : String, required: true},
	content : {type : String, required: true},
	category : {type : String, required: true},
	author_id : [{type : String, ref: 'Author'}]
}, {timestamps : true})

var Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
