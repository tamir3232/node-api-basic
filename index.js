require('dotenv').config()

const fs = require('fs')
const express = require('express')

const app = express()
const port = process.env.PORT || 8000
const USER_DATA_PATH = "./data/users.json"

app.get('/hello', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello World from hot reload'
    })
})

// note: pakai file karna belum ke materi db, setelah ke materi db kita akan pakai query database

// get data users
app.get('/users', (req, res, next) => {
    // buat variabel untuk menampung data read file
    const usersAsString = fs.readFileSync(USER_DATA_PATH).toString()

    // parse data string jadi json
    const users = JSON.parse(usersAsString)

    // dicek datanya ada atau engga
    const isUserExist = users && users.length > 0

    if (!isUserExist) {
        // kalo ngga ada data, maka return status code 404
        return res.status(404).json({
            message: 'user tidak ditemukan'
        })
    } else {
        // kalo ada data, return datanya
        return res.status(200).json({
            message: 'user ditemukan',
            data: users
        })
    }
})

// create new user

// update existing user

// delete user

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
