const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

//console.log(add(55, 1, 101, 200));


const user = {
    name: 'Andrew',
    cities: ['Kharkiv', 'Las Vegas', 'Lviv'],
    pritPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city );
    }
};

console.log(user.pritPlacesLived());


const multiplayer = {
    numbers: [1,2,3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplayer.multiply());