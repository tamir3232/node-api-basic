require('dotenv').config()

const fs = require('fs')
const express = require('express')

const app = express()
const port = process.env.PORT || 8000
const USER_DATA_PATH = "./data/users.json"

app.use(express.json())
app.use(express.urlencoded({extended: false}))

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
    }

    // kalo ada data, return datanya
    return res.status(200).json({
        message: 'user ditemukan',
        data: users
    })
})

// create new user
app.post('/users', (req, res, next) => {
    console.log(req.body)
    // read file users.json

    // tambah data baru ke array of user

    // konversi data array/object ke string

    // ditulis ulang data baru ke file users.json

      // dimunculin respon bahwa data berhasil dibuat
})

// update existing user
app.patch('/users/:id', (req, res, next) => {
    console.log(req.params.id)
    console.log(req.body)
    // nyari data dengan id tertentu ada atau engga

    // kalo ngga ada respon data not found

    // kalo ada, kita update data dari request

    // save ulang data ke users.json

      // dimunculin respon bahwa data berhasil diupdate
})

// delete user
app.delete('/users/:id', (req, res, next) => {
    // cari datanya by id

    // datanya ga ketemu => respon not found

    // kalo datanya ketemu baru kita hapus data tersebut

    // simpan data ke users.json

    // dimunculin respon bahwa data berhasil dihapus
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
