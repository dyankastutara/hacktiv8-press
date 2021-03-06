var express = require('express')
var router = express.Router()
var Article = require('../controllers/article')


router.get('/', Article.getAll)
router.post('/', Article.insert)
router.patch('/:id', Article.update)
router.delete('/:id', Article.delete)
router.get('/:author', Article.getByAuthor)
router.get('/:category', Article.getByCategory)

module.exports = router
