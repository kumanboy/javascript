'use strict';

//Map methodi - yangi massiv qaytaradi yani eski massivni qiymatini o'zgartirib

// const cars = ['aUdI', 'MeRceDes', 'bMw', 'tOyoTA', 'RoLce RoyS']
//
// const arr = cars.map(item => item.toLocaleLowerCase())
//
// console.log(arr)

//Filter methodi - yangi massiv qaytaradi filter qilib

// const cars = ['audi', 'mercedes', 'bmw', 'toyota', 'rolce royse']
//
// const arr = cars.filter(item => item.toLocaleLowerCase().includes('e'))
//
// console.log(arr)
//
// let cars = ['audi', 'mercedes', 'bmw', 'toyota', 'rolce royse']
//
// cars = cars.filter(item => item.toLocaleLowerCase().includes('a'))
//
// console.log(cars)

//Some/Every method - boolean qiymat qaytaradi
//Some methodi agar biror bir qiymat tog'ri bolsa true qaytaradi
//Every methodi agar hamma qiymat tekshiradi va  togri bolsa true qaytaradi agar togri bolmasa false
// const arr = [1, 2, 3, 'samar', true, 6]
//
// console.log(arr.some(item => typeof item === 'number'))
// console.log(arr.every(item => typeof item === 'number'))

//Reduce methodi - massivelarimizni bitta korinishga keltirshga yordam beradi yani bitta qiymat qaytaradi

// let arr = [13, 12, 341, 4, 56, 6]
// //
// // //         0             13
// // //         13            12
// // //         25            341
// // //         366           4
// // //         370           56
// // //         426           6
// // //         432           0
// //
// arr = arr.reduce((sum, current) => sum + current) //initial value bor yani 1ci qiymat berish mumkin
//
// console.log(arr)

// let arr = ['audi', 'mercedes', 'bmw', 'toyota', 'rolce roys']
//
// arr = arr.reduce((sum, current) =>`${sum}, ${current}`)
//
// console.log(arr)
