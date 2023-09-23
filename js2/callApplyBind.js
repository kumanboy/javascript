"use strict";

function logger() {
    console.log(this)
    console.log(`My car is ${this.name} and color is ${this.color}`)
}
const car = {
    name: 'BMW',
    color: 'Black',
}
// call, apply
logger.call(car) //call bilan apply farqi agar funksiya parametri bolsa apply methodida parametr qiymati arrayda boladi
logger.apply(car)

//bind

function calc(number) {
    return this * number
}
const multilpe2 = calc.bind(2)
console.log(multilpe2(10))

//context this bilan DOM elementlarda ishlash

const btn = document.querySelector('.clicked')

btn.addEventListener('click',() =>{
    console.log(this) //this.style.color = 'red'
})

const obj = {
    x: 10,
    y: 15,
    sum: function () {
        const logger = () => {
            console.log(this)
        }
        logger ()
    },
}
obj.sum()

// strelkali funksiya xech qanday contexga ega emas,
// xar doim o'zini tepasidagi contextga qaram bo'ladi

const calc = (a) => a + 10
console.log(calc(10))