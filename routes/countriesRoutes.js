const express = require('express')
const router = express.Router()
const countries = require('../controllers/countriesControllers')

router.get('/', countries.index)
router.get('/:name', countries.show)
router.post('/', countries.create)
router.patch('/:name', countries.update)


module.exports = router