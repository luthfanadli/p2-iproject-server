const { Category } = require('../models')

class CategoryController {
    static async allCategories(req, res, next) {
        try {
            const getCategories = await Category.findAll()
            res.status(200).json(getCategories)
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }
}

module.exports = CategoryController