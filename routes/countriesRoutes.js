const express = require('express')
const router = express.Router()
const countries = require('../controllers/countriesControllers')

router.get('/', countries.index)



module.exports = router