const errorHandler = (err, req, resp, next) => {
    return resp.status(500).send(err.message)
}

module.exports = errorHandler