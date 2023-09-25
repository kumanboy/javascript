'use strict'

//json filelarni biz juda ko'p uchratamiz. json filelarni istalgan dasturchi oson tushuna oladi
//ESDA SAQLANG! javascriptda objectlarni server to'g'ridan to'g'ri qabul qilmaydi, shuning uchun ularni
//json formatiga o'zgartirish kerak bo'ladi

const car={
    name: 'BMW',
    color: 'black',
    extra: 5,
    isElectric: true
}
//obyektdan JSONga o'girish
const objToJson = JSON.stringify(car)

console.log(objToJson)
//objectni json formatiga otkazgan paytimizda undagi ''(1 tirnoq ) icidagi qiymat ""(qoshtirnoq)ga o'zgaradi

//JSONdan objectga o'girish

const jsonToObj = JSON.parse(objToJson)

console.log(jsonToObj)
//avval JSON bolmagan paytda XML file ishlatilgan lekin hozir JSON ancha qulay va tushinish oson

//Chuqur clonlash

const clone = JSON.parse(JSON.stringify(car))

clone.extra = 10

console.log(clone)
console.log(car)

