'use strict'

//OOP tushunchasi Objectlarni Objectlarda yaratish,string number boolean kabi malumot turlarimiz bor
// ularni ham objectlarda yaratish.Javascript fundamenti Obyektga yonaltirilgan dasturlash tili hisoblanadi.
//Agar Javascript OOPsi yani fundamentini organib olsak react vue node react native kabi frameworklarni
// o'rganish oson boladi.
//Hayotiy Misol:
//Mashinani fundamental qismlari yoki uni harakatlantirish deyarli hamma mashinada bir xil. javascipt OOP tushunchasida ham
//deyarli birxil methodlar orqali yaratiladi.
//Hayotiy Misol:
//Hammani uyida TV bor lekin kimningdir Tvsida Youtubega ulansa boladi,kimnikidadir ham uzb ham chet el kanallari bor
//kimnikidadir faqat uzb 12ta telekanali bor lekin hammasi tv faqat funksiyasi koproq boladi
//
// const firstName = "Muslim";
//
// //consoleda koradigan bolsak string malumot turimiz ham object malumot turidan tashkil topganini korishimiz mn
//
// const str = new String(firstName); // bu yol eski usul shu uchun warning korsatmoqda
//
// console.log(str)
// console.log(firstName)
//
// //malumot turini kelinglar tekshiraylik
//
// console.log(typeof str)
// console.log(typeof firstName)

//korishimiz mn firstname deb yaratgan ozgaruvchimiz string str deb yaratilgan ozgaruvchimiz esa object malumot turida
//yani string object malumot turidan kelib ciqqan.

//brauzerda console orqali tekshiramiz. console.dir(String)

//misol:ozimiz qolda object hamda uning prototip yasaymiz

const samsungTv = {
    size: 42,
    color: "black",
    isSmartTv: true,
    isConnectable: function (){
        console.log("connectable");
    }
}

const artelTv ={
    isSmartTv: false
}

//tepadagi samsungTv object ichidagi size color prototiplari  artelTv ichida ham bolsin
//buning uchun proto ishlatamiz.

//korishimiz mumkinki artelTvda color size isConnectable prototiplari yoq. yani bu yerda zanjir bolyapti. yani samsungTv
//prototiplari artelTvda uchun ham ishlamoqda

// artelTv.__proto__ = samsungTv //sal eskirgan usul //old but gold
//
// artelTv.isConnectable();
//
// console.log(artelTv)

//endi yangi va kop ishlatadigan yollarni usullar organamiz eski usulni unutamiz

//Object.setPrototypeOf va Object.getPrototypeOf degan methodlarimiz bor lkn hozir setPrototypeOf koramiz

//Object.setPrototypeOf() methodi qavs ichida 1chi qaysi object ozgartirmoqchimiz shu yoziladi va qaysi objectdan protype
// oladi.
Object.setPrototypeOf(artelTv,samsungTv)

//endi yana bitta yangi objectga samsungTv protypeni beraylik buning uchun Object.create() methodi ishlatiladi

const lg = Object.create(samsungTv);

console.log(lg)

