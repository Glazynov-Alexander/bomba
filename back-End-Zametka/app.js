const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const products = require('./route')
mongoose.connect(`mongodb+srv://admin:admin@cluster0.w41p4.mongodb.net/Zametky?authSource=admin&replicaSet=atlas-hp2iy6-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
const app = express()

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use('/task',cors(corsOptions), products)
app.listen(8080)