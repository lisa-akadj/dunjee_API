const countries = require('../countries.json')

class Country {
    constructor(country) {
        this.name = country.name;
        this.capitalCity = country.capitalCity
        this.continent = country.continent
    }

    static showAll() {
        return countries.map(q => new Country(q))
    }

    static show(name) {
        const country = countries.find((country) => country.name.toLowerCase() == name)

        if (country) {
            return new Country(country)
        } else {
            throw 'Country not in database'
        }
    }

    static create(data) {
        const newCountry = data

        if (!data.name) {
            throw 'A country should have a name'
        }

        const country = countries.find((country) => country.name.toLowerCase() == data.name.toLowerCase())

        if (country) {
            throw 'The country already exists'
        } else {
            // newCountry['id'] = Math.max(...countries.map())
            countries.push(newCountry)
            return new Country(newCountry)
        }
    }

    update (data) {
        const updateCountry = countries.find(country => country.name.toLowerCase() == this.name.toLowerCase())

        if (updateCountry) {
            if (data.name) updateCountry.name = data.name
            if (data.capitalCity) updateCountry.capitalCity = data.capitalCity
            if (data.continent) updateCountry.continent = data.continent 

            return new Country(updateCountry)
        } else {
            throw 'Country not found'
        }
    }
}


module.exports = Country