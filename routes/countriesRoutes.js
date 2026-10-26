const express = require('express')
const router = express.Router()
const countries = require('../controllers/countriesControllers')

router.get('/', countries.index)
router.get('/:name', countries.show)


module.exports = router