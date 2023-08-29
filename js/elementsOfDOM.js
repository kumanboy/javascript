'use strict'

//OLD Way                   old but gold

//html filelarimizga ozgartirishlar kiritmoqchi bolsak albatta uni
// ozgaruvchiga olishimiz kerak boladi
// box classimizni bitta ozgaruvchiga saqlab olamiz
//DOM elementlari orqali murojat qilish uchun html filemizdagi taglarimizga
//document kalit sozi yoziladi keyin biz class olmoqchimizmi yoki tag yoki id shu narsani ham korsatish uchun
//id boyicha olmoqchi bolsak getElementById() metodi qollaniladi, agar class boyicha getElementByClassName() metodi orqali olamiz


// const box = document.getElementById('box');

//html filemizda buttonlarimiz bor ularni olish uchun ham ozgaruvchi yaratib olamiz hamda taglarimizga murojat qilish uchun
//getElementsByTagName() metodi orqali olamiz.getElementsByTagName() metodi har doyim massive qaytaradi

// const buttons = document.getElementsByTagName('button');

//consoleda koradigan bolsak bizda  massive qaytarmoqda. agar biz buttonlarimiz ichidagi aynan bittasiga ozgartirish kiritmoqchi
//bolsak document.getElementsByTagName('button')[1] uning indexini korsatib qoyishimiz kerak boladi
// const button = document.getElementsByTagName('button')
// console.log(button);

// const circle = document.getElementsByClassName('circle');
//
// console.log(circle);

//consoleda koradigan bolsak bizda  massive qaytarmoqda. agar biz circle ichidagi aynan bittasiga ozgartirish kiritmoqchi
//bolsak document.getElementsByClassName('circle')[1] uning indexini korsatib qoyishimiz kerak boladi
//Consoleda HTML Collection korsatadi

// console.log(circle);

//New Way

//querySelector() va querySelectorAll() metodlari orqali taglra murojat qilishimiz mn
//bir narsani yodda saqlang agar biz classga murojaat qilmoqchi bolsak uning nomi oldidan . (nuqta) .heart qoyishimiz kerak
// agar idga murojaat qilmoqchi bolsak uning nomi oldidan # (panjara) qoyishimiz kerak #heart qoyishimiz kerak,
// agar tagga murojaat qilmoqchi bolsak hech qanaqa belgi qoyilmaydi
//querySelector() faqat 1chi elementni qaytaradi
//querySelectorAll() hammasini
//
// const box = document.querySelector('#box')
// console.log(box);
//
// //queryselectorAll() NodeList qaytaradi. HTML Collectiondan farqi prototipida.Va aynan shu narsa uning avfzal tomoni hisoblanadi
// //NodeList prototipini koradigan bolsak unda forEach() metodi qollasak boladi bu orqali bemalol loop hosil qilsak boladi
//
// const hearts = document.querySelectorAll('.heart')
// console.log(hearts);

//Loop
// const hearts = document.querySelectorAll('.heart')
//
// hearts.forEach((item)=>{
//     console.log(item)
// })

//quyidagi kodda HTML document boyicha wrapperni izlamayapti aynan wrapperni ozini ichidan heart classlarimizni olyapti
//bu usulni ham bilib qoygan yaxshi
//
// const wrapper = document.querySelector('.wrapper');
// //
// const heart= wrapper.querySelectorAll('.heart');
// //
// console.log(heart);
const button =document.querySelector('.btn')
button.style.backgroundColor='pink';
button.addEventListener('mouseenter',()=> {
    alert('hover');
})
button.textContent='M';

const link = document.querySelector('a');
link.addEventListener('click',(event)=> {
    event.preventDefault()
    const user = prompt('Enter your name');
    console.log(user);
})