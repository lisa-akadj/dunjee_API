const express = require('express');
const app = express()
const countries = require('./routes/countriesRoutes')

app.use(express.json())
app.use('/countries', countries)

app.get('/', (req, res) => {
    res.send('Hello there.')
})

module.exports = app