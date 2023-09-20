"use strict";

//1 chi buttonlarimizni ozgaruvchiga olamiz

const btns = document.querySelectorAll('button')

//endi btnlarimizda classlar sonini koraylik. buning uchun classList hamda length propertylarini ishlatamiz

// console.log(btns[0].classList.length)
//consoleda korishimiz mn 2 raqami chiqadi
//item methodi orqali esa classlarimizni olishimiz mn
// console.log(btns[0].classList.item(1));
//consoleda esa blue korishmiz mn

//taglarimizga classlar ham qoshsak boladi, buning uchun esa add() methodini ishlatamiz

// btns[1].classList.add('blue')

//agar class nomlarini olib tashlamoqchi bolsak buning uchun biz  remove() methodini ishlatamiz

// btns[0].classList.remove('blue')

//Toggle() metodini agar button bolsa ochirib tashaydi yoq bolsa qoshadi

// btns[0].classList.toggle('blue')


//contains() methodi orqali element ichida class bormi yoqmi tekshirib beradi
//
// if (btns[0].classList.contains('blue')) {
//     console.log('blue');
// }

btns[0].addEventListener('click', () => {
    // if(btns[0].classList.contains('blue')){
    //     btns[0].classList.remove('blue')
    // }
    // else {
    //     btns[0].classList.add('red')
    // }
    (btns[0].classList.contains('blue')) ? console.log('blue') : console.log('red')
})
// toggle orqali esa kodimizni qisqartirsak boladi

// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle('red')
// })
