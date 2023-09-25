"use strict";
//
// class Car {
//     constructor(name, color, speed) {
//         this.name = name
//         this.color = color
//         this.speed = speed
//     }
//
//     calcSpeed() {
//         return this.speed * 100
//     }
// }
// const bmw = new Car('BMW', 'Black', 2)
//
// console.log(bmw.calcSpeed())
//
//
// class Spark extends Car {
//     constructor(name, color, speed, isAirbag, extraBallon) {
//         super(name, color, speed)
//         this.isAirbag = isAirbag
//         this.extraBallon = extraBallon
//     }
//
//     informer() {
//         console.log(`My car is ${this.name} and color is ${this.color} and speed is ${this.speed} and isAirbag is
//         ${this.isAirbag} and extraBallon is ${this.extraBallon}`)
//     }
// }
//
// const aboutCar = new Spark('spark','white', 5, true, 1)
// aboutCar.informer()
// console.log(aboutCar.calcSpeed())
//
// class Tico extends Spark{
//     constructor(name, color, speed, isAirbag, extraBallon, isElectric, distance) {
//         super(isAirbag, extraBallon)
//         this.isElectric = isElectric
//         this.distance = distance
//     }
//     calcuDistance() {
//         return this.distance
//     }
// }
//
// const tico = new Tico('tico', 'white', 10, true, 2, true, 100)
//
// console.log(tico.calcuDistance())
// function defaultParam(a, b  ) { //b = 4
//     console.log(a * b)
// }
// defaultParam(2)