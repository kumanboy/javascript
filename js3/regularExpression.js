'use strict';

// new RegExp('pattern','flags')

// /pattern/flag

// const firstName = prompt('Enter your first name', 'Husan');

// const regex = /a/g

//flaglar

// i - case insensiti
// g - global

// console.log(firstName.search(regex))
// console.log(firstName.match(regex))

const password = prompt('Enter your password', '123456abcd');

console.log(password.replace(/./g, '*' ));

// console.log(password.replace(/\$/g, '* '))
//
// const num = '12-34-56-78-90'
//
// console.log(num.replace(/-/g, ':'));

// const name = prompt('Name' , '...')
//
// const regex = /san/gi
//
// console.log(regex.test(name))
//
// if (regex.test(name)) {
//     console.log('Welcome to hell')
// } else {
//     console.log('Go back to heaven')
// }

const name = prompt('Name' , '...')

const regex = /\d/gi

// \d - raqamlar
// \w - harflar
// \s - space yoki probel

// \D- raqam emas
// \W - harf emas
// \S - space yoki probel emas

console.log(name.match(regex))

