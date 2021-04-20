const express = require('express')
const connection = require('./db/connection')

//Model
const userModel = require('./models/User')

//Conection database
connection
    .authenticate()
    .then(() => {
        console.log('deu')
    })
    .catch((error) => {
        console.log(error)
    })

const app = express()
const router = require('./routes/router')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)

app.listen(4000)