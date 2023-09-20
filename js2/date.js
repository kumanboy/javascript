'use strict';

//Date  hozirgi vaqtni korsak boladi

const now = new Date()

console.log(now)

//Date methodlari getFullYear, getMonth, getDate, getHours,getMinutes, setFullYear, setMonth, setDate ishlatib ko'rish


//Loop necha sekund ishlashini Date orqali tekshiramiz

const start = new Date()

for (let i = 0; i < 10000000; i++) {
    let some = i ** 3
    //smth
}

const end = new Date()

alert(`Loop ishladi ${end - start} millisekund`)
