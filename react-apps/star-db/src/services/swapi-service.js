export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} receiverd ${res.status}`)
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transormPerson())
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transormPerson(person)
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet())
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship())
    }

    getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship)
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            lenght: starship.length,
            crew: starship.crew,
            passangers: starship.passangers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transormPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gener: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

}