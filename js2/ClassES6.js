"use strict";

class Car {
    constructor(name, color, speed) {
        this.name = name
        this.color = color
        this.speed = speed
    }

    calcSpeed() {
        return this.speed * 100
    }
}

class Spark extends Car {
    constructor(name, color, speed, isAirbag, extraBallon) {
        super(name, color, speed)
        this.isAirbag = isAirbag
        this.extraBallon = extraBallon
    }

    informer() {
        console.log(`My car is ${this.name} and color is ${this.color} and speed is ${this.speed} and isAirbag is
        ${this.isAirbag} and extraBallon is ${this.extraBallon}`)
    }
}

const aboutCar = new Spark('spark','white', 100, true, 1)
aboutCar.informer()

// const bmw = new Car('BMW', 'Black', 200)

// console.log(bmw.calcSpeed())