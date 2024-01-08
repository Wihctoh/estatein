function buildResponse(res, statusCode, data) {
    return res.status(statusCode).send(data);
}

module.exports = { buildResponse };
