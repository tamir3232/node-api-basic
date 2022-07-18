const logger = (req, res, next) => {
    console.log(`body: ${JSON.stringify(req.body)}`)

    // req.user = {
    //     id: 1,
    //     name: 'Saeful'
    // }

    return next()
}

const logParam = (req, res, next) => {
    console.log(`originalUrl: ${JSON.stringify(req.originalUrl)}`)

    return next()
}

module.exports = { logger, logParam }


// request
// mid 1 => next()
// mid 2 => next()
// mid 3 => next()
// handler