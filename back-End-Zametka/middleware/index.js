exports.middleware =  (req, res, next) => {
    if (req.body.title === '') {
       return res.status(400).json({status: "not title"})

    }
    next()
};