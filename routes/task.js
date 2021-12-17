const router = require('express').Router()
const TaskController = require('../controllers/task')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.use(authentication)
router.get('/voice', TaskController.voicerss)
router.get('/', TaskController.allTasks)
router.post('/', upload.single('image'),TaskController.addTask)
router.get('/:id', authorization, TaskController.taskById)
router.put('/:id', authorization, TaskController.editTask)
router.delete('/:id', authorization, TaskController.deleteTask)

module.exports = router