const global = (err,req, res, next) => {
    res.status(500).send({ err });
}
module.exports = global