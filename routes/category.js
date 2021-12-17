const router = require('express').Router()
const CategoryController = require ('../controllers/category')
const authentication = require('../middleware/authentication')

router.use(authentication)
router.get('/', CategoryController.allCategories)

module.exports = router