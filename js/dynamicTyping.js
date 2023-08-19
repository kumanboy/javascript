'use strict'

//dynamic typing bu bir malumot turidan 2chi malumot turiga o'tish
// misol uchun string malumot turidan number malumot turiga otish

//123 number turidagi son bor shu qiymatni string ozgartirmoqchi bolsak qaysi yoldan foydalanamiz
//1) stringga otish

// console.log(String(4));

//qiymat string malumot turida

//2) avval ham korganmiz bu usulni

// console.log(typeof ('husan ' + 20))

//3) number malumot turiga otkazish

// console.log(Number('123'))

//4) number malumot turiga otkazish

// console.log(+'123');

//5) number malumot turiga otkazish parseInt() methodi orqali

// console.log(parseInt('123'));

//booleanga otish

//Muhim.Esda saqlang.
// Null, 0, "", undefined, NaN bizga doyim false qaytaradi

//Ozgaruvchi yaratyapmiz qiymati 0 ga teng. If orqali tekshiryapmiz agar shartimiz falsega teng bolsa console ishlamasligi

//kerak. 0 false qiymatga ega bolgani uchun bizda consoleda yozuv chiqmaydi

// let number = 0;
//
// if (number){
//     console.log("husan");
// }

//2) boolean malumot turiga otkazish

// console.log(typeof Boolean('4'));

//3) boolean malumot turiga otkazish

// console.log(typeof !!'4');