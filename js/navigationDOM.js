'use strict'
// //index.html documentimiz boyicha korib chiqamiz
//
// console.log(document.head);
//
// //consoleda head qismini korishimiz mn
//
// console.log(document.body);
//
// //consoleda body qismini korishimiz mn
//
// console.log(document.body.childNodes)
//
// //consoleda text div overlay buttonlarimiz  korishimiz mn
// //yani body ichidagi barcha elementlarni taglarni korishimiz mn boladi
//
// console.log(document.body.firstChild); //body tagimiz ichidagi 1chi tagni korsatmoqda
// console.log(document.body.lastChild);  //body tagimiz ichidagi oxirgi tagni korsatmoqda
//
// console.log(document.querySelector('#btn').parentNode) //bu yerda ham bola ham ota tagimizni korishimiz mn
//
// //html taglarini olishning yana bir yoli data-current javascriptda kalit sozini
// //ishlatishimiz mumkin. yani id class berib otirishimiz shart emas
// // bu narsa calculator yaratishda kerak boladi
//
// console.log(document.querySelector('[data-current="h"]'))
// // endi biz keyingi element olmooqchi bolsak nextSibling  ishlatamiz
// //undan avvalgi tagni olmoqchi bolsak previousSibling  ishlatamiz
// //2la holatda ham text korsatmoqda chunki u yerda probel bor.
//
// console.log(document.querySelector('[data-current="h"]').nextSibling)
//
// //lekin keyingi yoki avvalgi tagni olmoqchi bolsak nextElementSibling va previousElementSibling
// //ishlatamiz
//
// console.log(document.querySelector('[data-current="h"]').nextElementSibling)
// console.log(document.querySelector('[data-current="h"]').previousElementSibling)
//
// //textlarni olib tashlash uchun biz nodeName ishlatamiz
//
// for(let node of document.body.childNodes){
//     if (node.nodeName === '#text'){
//         continue
//     }
//     console.log(node)
// }