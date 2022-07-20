require('dotenv').config()

const express = require('express')
const { logger, logParam } = require('./middlewares/logger')
const userRouter = require('./routes/users')

const app = express()
const port = process.env.PORT || 8000


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger)
app.use(logParam)

app.get('/hello', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello World from hot reload'
    })
})

app.use('/users', userRouter)

// 404 middleware
app.use('*', (req, res, next) => {
    return res.status(404).json({
        message: 'endpoint not found'
    })
})

// error middleware
app.use((err, req, res, next) => {
    console.log(err)

    const status = err.code || 500
    const message = err.message || 'internal server error'

    return res.status(status).json({
        message
    })
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
