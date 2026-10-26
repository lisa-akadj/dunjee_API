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
}


module.exports = Country