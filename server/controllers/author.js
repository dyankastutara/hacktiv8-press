var Author = require('../models/author')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

var methode = {}

methode.signup = function(req, res){
	var insertAuthor = new Author({
		name : req.body.name,
		username : req.body.username,
		password : bcrypt.hashSync(req.body.password, 10)
	})

	insertAuthor.save(function(err, result){
		if (err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

methode.signin = function(req, res){
	var user = req.user
	if(!user.msg){
	var token = jwt.sign({
		  name : user.name,
	    username: user.username}, 'secret', {expiresIn : '1h'});
			res.send({
				'token' : token
			})
	}
	res.send(user.msg)
}

methode.validation = function(req, res){
	var token = req.headers.token
	jwt.verify(token, 'secret', function(err, decoded) {
	  if(err){
			res.send(err)
		}else{
			res.send(decoded)
		}
	});
}

methode.getAll = function(req, res){
	Author.find({}, function(err, result){
		if(err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

methode.update = function(req, res){
	Author.findOne({_id : req.params.id})
	.then((result)=>{
		Author.update({
			_id : req.params.id
		}, {
			$set : {
			name : req.body.name || result.name,
			username : req.body.username || result.username,
			password : bcrypt.hashSync(req.body.password, 10) || result.password
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
	Author.remove({_id : req.params.id}, function(err, result){
		if(err){
			res.send(err)
		}else{
			res.send(result)
		}
	})
}

module.exports = methode
