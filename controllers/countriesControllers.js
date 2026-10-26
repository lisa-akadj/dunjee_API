const Country = require('../models/CountryModel')

const index = async (req, res) => {
    try {
        const countries = await Country.showAll()
        res.status(200).send(countries) 
    } catch (err) {
        res.status(500).send({error: 'Server error'})
    }
}

module.exports = {index }