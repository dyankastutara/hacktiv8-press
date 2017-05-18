var express = require('express')
var router = express.Router()
var Author = require('../controllers/author')
var passport = require('passport')

router.post('/signup', Author.signup)
router.post('/signin', passport.authenticate('local', { session: false }), Author.signin)
router.get('/', Author.getAll)
router.patch('/:id', Author.update)
router.delete('/:id', Author.delete)

module.exports = router
