"use strict";

//context this - nimagadur qaram boladi
// 1-) Oddiy functionni contexti ya'ni this xar doim window global objectga qaram bo'ladi
// ya'ni osiladi. Agarda qati'y rejim yoqu bo'lsa (use strict) context undefinedga teng bo'ladi

// function logger() {
//     console.log(this)
// }
//
// logger()



//Closure
// function Logger(a, b) {
//     console.log(this)
//
//     function sum() {
//         console.log(this)
//         return a + b
//     }
//     console.log(sum())
// }
//
// Logger(1, 2)
//*******************************---------------************************
// 2-) context this objectlarda nimaga qaram boladi(osiladi)

// const obj = {
//     x: 10,
//     y: 20,
//     sum: function () {
//         console.log(this)
//     }
// }
//
// obj.sum();

//Context this objectni ichidagi metodda - objectni o'ziga teng
//*******************************---------------************************
// 3-) Context this funksiya konstruktorda yangi objectni ekzemplyariga teng boladi
// function Car(name, color) {
//     this.name = name
//     this.color = color
//     this.isAirbag = true
// }
//
// const bmw = new Car('BMW', 'Black')
// console.log(bmw)