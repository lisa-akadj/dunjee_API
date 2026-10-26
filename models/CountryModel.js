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
}


module.exports = Country