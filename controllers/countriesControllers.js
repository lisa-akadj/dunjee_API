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

const create = async (req, res) => {
    try {
        const newCountry = await Country.create(req.body)
        res.status(201).send(newCountry)
    } catch (err) {
        res.status(409).send({error: err})
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const country = await Country.show(name)
        const result = await country.update(req.body)
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send({error: err})
    }
}





module.exports = {index, show, create, update}