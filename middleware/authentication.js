const { User } = require('../models/index')
const { verifyToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
    const {access_token} = req.headers
    try {
        const payload = verifyToken(access_token)
        const user = await User.findOne({

            where: {
                email: payload.email,
                id: payload.id,
            },
        })
        if (!user) {
            throw { name: "JsonWebTokenError" }
        }
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role,
            username: user.username
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authentication