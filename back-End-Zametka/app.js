const cors = require('cors')
const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const products = require('./route')

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
mongoose.connect(`mongodb+srv://admin:admin@cluster0.w41p4.mongodb.net/Zametky?authSource=admin&replicaSet=atlas-hp2iy6-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/task',cors(corsOptions) , products)

app.listen(8080)