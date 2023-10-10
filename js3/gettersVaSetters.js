'use strict'

const car = {
    name: 'bmw',
    color: 'black',

    get carName() {
        return this.name
    },

    set carName(name) {
        this.name = name
    }
}

console.log(car.carName)

console.log(car.carName = 'audi')