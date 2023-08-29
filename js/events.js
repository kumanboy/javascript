'use strict'

//javascript events yoki javascriptda hodisalar. misol uchun biror button bosilganda
// yangi oyna ochilishi yoki jonatish degan button bosilganda malumot bazaga kelishi
// aniqroq qilganda biror amal bajarilishi uchun qollaniladigan DOM event lar

//3 xil tarzda hodisalar berishimiz mumkin

// 2-usul
//2 usuldan ancha payt foydalanishgan lekin hozirda ishlatsak bazi bir xatolarga duch kelamiz
//shuning uchun ishlatmagan maqul hisoblanadi
//2 usulning 1 - minus tarafi biz yaratilgan eventni malum bir vaqt otib ochirib tashlay olmaymiz
//2 usulning 2 - minus tarafi 1ta btnga 2ta event yozib yuborsak xato korsatmaydi
//lekin 1chi yozilgan eventimiz kksiz bb qoldi
const buttn = document.querySelector('#btn')
const overlay = document.querySelector('.overlay')
// //
// buttn.onclick= ()=> {
//     alert('2 usul 1')
// }
// //
// buttn.onclick= function () {
//     alert('2 usul 2')
// }

//3 usul eng yaxshi usul addEventListener() methodini ishlatish orqali

// buttn.addEventListener('click', function () {
//     alert('3 usul')
// })

//koproq misollar koramiz. sichqonchani ertgan paytmizda xabar chiqarish uchun
//addEventListener() methodining mouseenter turini ishlatamiz.yani hover bolganda xabar chiqmoqda

// buttn.addEventListener('mouseenter',() =>  {
//     alert('Hover')
// })

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World!";
// });
//
// //har bitta xodisamizni ozini malumotlari mavjud
//
// buttn.addEventListener('click',(event) =>  {
//     console.log(event) //event.target , event.target.remove ishlatib korish
// })

// endi biz buttonni 1 marta bosiladigan qilishimiz mn. misol uchun faraz qiling,
//bazaga malumot jonatilyapti foydalanuvchi tomonidan. agar biz buttonimizni bir marta
//bosiladigan qilib qoymasak u bizga bir xil malumotni bir necha marotaba jonatishi mn
//buning uchun quyidagi kod yoziladi

//ozgaruvchi yaratiladi loop uchun

// let i = 0

//albatta bitta callback function yaratishimiz kerak
// const stopBtn = (e) =>{
//     i++
//     if(i === 3){
//         buttn.removeEventListener('click',stopBtn)
//     }
//     console.log(i)
// }
//
// buttn.addEventListener('click',stopBtn)

//eventlar boyicha 2xil tushunca bor bu holat juda kam keladi.
//yani biz bola div bosgan paytimizda ota divga ham otadi buni overlay div ichidagi buttonda korishimiz mn

// const cb = (e) =>{
//     console.log(e.currentTarget)
// }
//
// buttn.addEventListener('click',cb)
// overlay.addEventListener('click',cb)

//preventDefault() metodini ishlatish

// const link = document.querySelector('a')
// //
// link.addEventListener('click',(event)=>{
//     event.preventDefault()
//     const user = prompt('Enter your name')
//     console.log(user)
// })

// 3ta buttonlarimiz bosilganda bir xil malumot chiqarmoqchi bolsak quyidagi kod yoziladi
//etiborli boling querySelectorAll() massive qaytaradi agar unga biz biror bir event bermoqchi bolsak
//ishlamidi.boshlovchi dasturchilar kop xollarda shu kabi xatolarga duch keladi


// const btns = document.querySelectorAll('button')
//
// //1chi navbatda biz forEach orqali iteratsiya qilib chiqishimiz kerak boladi
// //songra ozimizni elementimizga event(hodisa) qoshsak boladi
//
// btns.forEach((item) => {
//     item.addEventListener('click',() => {
//         alert("hello niggas i am working with events")
//     })
// })
//
// //yani massivemizga eventlar bermoqchi bolsak albatta iteratsiya qilishimiz kerak boladi
//
// //buttonlarimiz bir martadan bosiladigan qilishimiz uchun quyidagi kod yoziladi
//
// const oneClick = () =>{
//     console.log(1)
// }
// //
// btns.forEach((item) => {
//     item.addEventListener('click',oneClick,{once:true})
// })
