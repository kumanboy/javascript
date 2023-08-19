'use strict'

//Clonlash bu nusxa olish degani quyidagi misolda korishingiz mumkinki
//x ozgaruvci yaratilmoqda va uning qiymati 5 hamda y ozgaruvchi yaratilmoqda yaratilmoqda hamda
//y ozgaruvchisi x ozgaruvchisini qiymatini olmoqda yani nusxalamoqda, va y qiymatimizga 5 qiymat qoshmoqdamiz
//consoleda esa 5 va 10 qiymatlarni korishmiz mn
//
// let x = 5
// let y = x
// //
// y= y+5
// //
// console.log(x)
// console.log(y)

//koproq misol

//number nomli obyekt yarataylik hamda uning x va y propertylari bolsin

// const number ={
//     x: 5,
//     y: 10
// }
//
// //endi objektimiz nusxasini olishimiz uchun
//
// const newNumber = number
//
// newNumber.x = 10
// //
// // //endi qiymatlarni consoleda tekshirib koramiz
// //
// console.log(number)
// console.log(newNumber)

//korishimiz mn bir xil qiymat korsatmoqda x propertymiz.

//misol. funksiya yarataylik uning obj argumenti bolsin, va funksiya ichida loop yarataylik. hamda funksiya tashqarisida
//  numbers nomli obyekt yarataylik.hamda u funksiya ichidagi argumentimizni clonlasin yani nusxasni olsin

// function qulpinsa(obj){
//     let newObj = {}
//
//     for (let key in obj){
//         newObj[key] = obj[key]
//     }
//     return newObj
// }
// const number ={
//     x: 5,
//     y: 10
// }
// //
// const newNumber = qulpinsa(number)
// //
// newNumber.x = 15
// //
// console.log(number);
// console.log(newNumber);
//kodimiz mukammalashtiramiz, object ichida yaratilgan obyektning qiymatini olishga va ozgartirishga harakat qilamiz
// function cloning(obj){
//     let newObj = {}
//
//     for (let key in obj){
//         newObj[key] = obj[key]
//     }
//     return newObj
// }
// const number ={
//     x: 5,
//     y: 10,
//     z:{
//         a: 5,
//         b: 10
//     }
// }
//
// const newNumber = cloning(number)
//
// newNumber.x = 15
// newNumber.z.b = 15
//
// console.log(number);
// console.log(newNumber);

//agar biz yangi object yaratsak yoki yaratilgan objectimiz ichida yangi qiymatlar qoshadigan bolsak funksiyamiz ichida

//yangi iteratsiya yaratishga majburmiz lekin javascript methodlari orqali bu judayaman oson.

//misol

// const number ={
//     x: 5,
//     y: 10,
//     z:{
//         a: 5,
//         b: 10
//     }
// }

//Object.assign methodi orqali siz numbers objectimizni newNumber objectimizda clonlashimiz mn.Object.assign methodida

//target hamda srcdan iborat

// const newNumber = Object.assign({}, number);
//
// newNumber.x = 15
//
// //consoleda korishimiz mnki newNumber va number qiymati ozgardi va ulardan nusxa olindi, qiymati ozgartirildi
//
// console.log(newNumber)
// console.log(number)
//Object.assign methodini target qismini ishlatib koramiz

// const number ={
//     x: 5,
//     y: 10,
// }
// //
// const addNumber = {
//     z:15,
//     a:20,
//     b:25,
// }
// // //shu joyda 2ta object birlashtiramiz
// //
// const allNumber = Object.assign(addNumber, number);
// //
// console.log(allNumber);

//Endi biz clonlash yani objectlardan nusxa olish organib oldik kelinglar yanada chuqurroq mavzularga otamiz

//misol, yangi array yaratamiz,hamda uni numbers nomli ozgaruvchiga nusxalaymiz. buning uchun slice() methodidan foydalanamiz


// const arr = [1, 2, 3, 4, 5];
//
// const numbers = arr.slice();
// // //
// numbers[1] = 'husan';
// //
// // //consoleda esa kodlarimizni koramiz
// // //
// console.log(arr);
// console.log(numbers);
//
// //SPREAD OPERATORI massivemizni yangi massivega aylantirib beradi
//
// //2ta massivemizni birlashtirmoqci bolsak spread operatori hammasini hal qiladi
//
const country = ['Uzbekistan', 'Tajikistan', 'Kazakhstan'];
const capital = ['Tashkent', 'Dushanbe', 'Astana'];
//
const countryCapital = [...country, ...capital]; // ...(3ta nuqta) spread operatori hisoblanadi

console.log(countryCapital);

