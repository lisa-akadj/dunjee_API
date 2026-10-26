const Country = require('../models/CountryModel')

const index = async (req, res) => {
    try {
        const countries = await Country.showAll()
        res.status(200).send(countries) 
    } catch (err) {
        res.status(500).send({error: 'Server error'})
    }
}

const show = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const country = await Country.show(name)
        res.status(200).send(country)
    } catch (err) {
        res.status(404).send({error: err})
    }
}





module.exports = {index, show}