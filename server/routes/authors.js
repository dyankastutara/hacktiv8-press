var express = require('express')
var router = express.Router()
var Author = require('../controllers/author')


router.post('/signup', Author.signup)
router.get('/', Author.getAll)
router.patch('/:id', Author.update)
router.delete('/:id', Author.delete)

module.exports = router