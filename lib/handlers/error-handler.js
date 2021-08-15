/**
 * Custom error handler to log error on log file and to send client only needed data
 * @param {*} err error object
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next request context; use to continue natural request flow
 */
function erroHandler(err, req, res, next) {
    // check if request was made
    if (req.xhr) {
        // TODO: store this error to log/exception/{date}.txt
        // set error code to 500 and send to client
        res.status(500).send({ error: 'Something failed! :(' });
    } else {
        // if req is not served; then continue
        next(err);
    }
}

/**
 * Export functions from this file as module
 */
module.exports = {
    erroHandler
}