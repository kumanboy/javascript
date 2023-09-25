"use strict";

// function logger(a) {
//     console.log(this)
//     console.log(`My car is ${this.name} and color is ${this.color}, speed is ${a}`)
// }
// const car = {
//     name: 'BMW',
//     color: 'Black',
// }

// call, apply
//logger.call(car, 100) //call bilan apply farqi agar funksiya parametri bolsa apply methodida parametr qiymati arrayda boladi
//logger.apply(car,[200])

//bind

// function calc(number) {
//     return this * number
// }
// const multilpe2 = calc.bind(2)
// console.log(multilpe2(10))
//
// //context this bilan DOM elementlarda ishlash
//
// const btn = document.querySelector('.clicked')
// //
// btn.addEventListener('click', function () {
//      this.style.backgroundColor = 'red'
// })
//
// const obj = {
//     x: 10,
//     y: 15,
//     sum: function () {
//         console.log(this)
//         const logger = function () {
//             console.log(this)
//         }
//         logger ()
//     },
// }
// obj.sum()

// strelkali funksiya xech qanday contexga ega emas,
// xar doim o'zini tepasidagi contextga qaram bo'ladi

// const calc = (a) => a + 10
// console.log(calc(10))