const errorHandlers = (err, req, res, next) => {
    console.log(err, 'this is from error handler<<<<<<<<<');
    if (err.name === 'notFound') {
        res.status(404).json({ message: 'Error Not Found' })
    } else if (err.name === 'notFoundId') {
        res.status(401).json({ message: 'Error Invalid Username/Password' })
    } else if (err.name === 'JsonWebTokenError') {
        res.status(401).json({ message: 'Error Authentication' })
    } else if (err.name === 'unauthorized') {
        res.status(403).json({ message: 'Forbidden Access' })
    } else if (err.name === 'badRequest') {
        res.status(400).json({ message: 'Error Validation' })
    } else if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message: err.errors.map((el) => el.message)})
    } else {
        res.status(500).json(err.name)
    }
}

module.exports = errorHandlers;