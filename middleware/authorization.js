const { Task } = require('../models/index')

const authorization = async (req, res, next) => {
    try {
        if (req.user.role === 'Admin') {
            next()
        } else {
            const id = req.params.id
            const findTasks = await Task.findByPk(id)
            if (!findTasks) {
                throw { name: 'notFound' }
            }
            // if (findProduct.authorId !== req.user.id) {
            //     throw { name: 'unauthorized' }
            // }
            if (req.user.role === "Staff"){
                if (findTasks.UserId !== req.user.id){
                    throw {name: 'unauthorized'}
                }
            }
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authorization