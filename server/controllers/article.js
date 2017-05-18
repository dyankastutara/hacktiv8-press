var Article = require('../models/article')
var bcrypt = require('bcrypt')

var methode = {}

methode.insert = function(req, res){
	var insertArticle = new Article({
		title : req.body.title,
		content : req.body.content,
		category : req.body.category,
		author_id : req.body.author_id
	})

	insertArticle.save(function(err, result){
		if (err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

methode.getAll = function(req, res){
	Article.find({})
	.populate('author_id')
	.then(function(err, result){
		if(err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

methode.getById = function(req, res){
	Article.find({_id : req.params.id})
	.populate('author_id')
	.then(function(err, result){
		if(err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

methode.getByAuthor = function(req, res){
	Article.find({author_id : req.params.author})
	.populate('author_id')
	.then(function(err, result){
		if(err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

methode.getByCategory = function(req, res){
	Article.find({category : req.params.category})
	.populate('author_id')
	.then(function(err, result){
		if(err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

methode.update = function(req, res){
	Article.findOne({_id : req.params.id})
	.then((result)=>{
		Article.update({
			_id : req.params.id
		}, {
			$set : {
			title : req.body.title || result.title,
			content : req.body.content || result.content,
			category : req.body.category || result.category,
			author_id : result.author_id
			}
		}, {
			new : true
		}, function(err, result){
			if (err){
				res.send(err)
			}else{
				res.send(result)
			}
		})
	})
}

methode.delete = function(req, res){
	Article.remove({_id : req.params.id}, function(err, result){
		if(err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

module.exports = methode
