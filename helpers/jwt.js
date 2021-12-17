const jwt = require('jsonwebtoken')

function createToken(value){
    return jwt.sign(value, process.env.SECRET)
}
function verifyToken(value){
    return jwt.verify(value, process.env.SECRET)
}

module.exports = {createToken, verifyToken};