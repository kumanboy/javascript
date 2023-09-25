'use strict'


// function Car(name, color) {
//     this.name = name
//     this.color = color
//     this.isAirbag = true
//
//     const bmw = new Car('bmw', 'red')
//     const merc = new Car('merc', 'black')
//     console.log(bmw)
//     console.log(merc)
// }

function Car(name, color, mph) {
    this.name = name
    this.color = color
    this.mph = mph
    this.isAirbag = true
    this.speed = function () {
        console.log(`Name of car is ${this.name} and speed is ${this.mph} color is ${this.color}`)
    }
    this.calculateSpeed = () => {
        console.log(`Car speed is ${this.mph}`)
    }
}

    Car.prototype.speed = function () {
        console.log(`Name of car is ${this.name} and speed is ${this.mph} color is ${this.color}`)
    }

const bmw = new Car('bmw', 'red', 32)
const merc = new Car('merc', 'black', 10)
// bmw.sayHello()
// merc.sayHello()
// bmw.speed()
// bmw.calculateSpeed()
// merc.calculateSpeed()

console.dir(Car)
// merc.speed()