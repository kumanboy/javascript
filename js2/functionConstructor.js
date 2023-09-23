"use strict";
'use strict'

function Car(name, color) {
    this.name = name
    this.color = color
    this.isAirbag = true

    const bmw = new Car('bmw', 'red')
    const merc = new Car('merc', 'black')
    console.log(bmw)
    console.log(merc)
}

// function Car(name, color, mph) {
//     this.name = name
//     this.color = color
//     this.mph = mph
//     this.isAirbag = true
//     this.speed = function () {
//         console.log(`Speed of car ${this.name} is ${this.mph}`)
//     }
// }
//     Car.prototype.sayHello = function ) ({
//         console.log (Car name of ${this.name} say hello`)
//     })
//
// const bmw = new Car('bmw', 'red', 32)
// const merc = new Car('merc', 'black', 10)
// bmw.sayHello()
// merc.sayHello()
// bmw.speed()
// merc.speed()