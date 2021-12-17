const router = require('express').Router()
const user = require('./user')
const task = require('./task')
const category = require ('./category')
const errorHandlers = require('../middleware/errorHandlers')

router.use('/', user)
router.use('/categories', category)
router.use('/tasks', task)

router.use(errorHandlers)

module.exports = router