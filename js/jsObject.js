'use strict';

// Object

// const car = {
//     type:"Chevrolet", // Data Type: String
//     name:"Spark",     // Data Type: String
//     position: 4,      // Data Type: Number
//     color: "white",   // Data Type: String
//     isElectric: false // Data Type: Boolean
// };
//
// console.log(car);
// console.log(car['type']);
//
// // Array
//
// const colors = ["red", "blue", "green","white"]; // Data Type: Array
//
// console.log(colors[1]);



//Objectlar koproq

// const car = {
//     type:"Chevrolet", // Data Type: String
//     name:"Spark",     // Data Type: String
//     position: 4,      // Data Type: Number
//     color: {
//         doors:"white",
//         wheels:"black"
//     },   // Data Type: Object
//     isElectric: false // Data Type: Boolean
// };

//delete metodi obyekt  propertysini o'chirish
//
// delete car.isElectric;
//
// console.log(car);

//obyektimizdagi qiymatlarni uzunligi bilmoqci bolsak length peoperty ishlamidi

//shuning uchun keys metodi ishlatiladi undan song length property ishlatiladi

//keys metodi array qaytaradi qiymatlarni massive qaytaradi

// console.log(Object.keys(car));
//
// console.log(Object.keys(car).length);

//for aylanmasi orqali obyektimizni chiroyliroq tarzda consoleda chiqaraylik

//buning uchun in kalit sozi for aylanmasidan foydalanamiz

// for (let key in car) {
//     console.log(`Car property ${key}  and value ${car[key]}`);
// }

// run qilgan paytimizda color object qaytaryapti ularni ham korish uchun if elsedan fodalanib

//mukammalroq kod yozishimiz kk boladi.

// for (let key in car) {
//     if (typeof car[key] === "object") {
//         for (let i in car[key]){
//             console.log(`Car property ${i}  and value ${car[key][i]}`);
//         }
//     }else {
//         console.log(`Car property ${key}  and value ${car[key]}`);
//     }
// }
//for aylanmasida in va of kalit sozlari bor. bir biridan farqi of arraylar uchun ishlidi in esa objectlar un ishlidi

//keling objectimiz ichida ozimizni methodimizni yozaylik. misol uchun mashina qanaqa qilib o't oladi degan funksiya

const car = {
    type:"Chevrolet", // Data Type: String
    name:"Spark",     // Data Type: String
    position: 4,      // Data Type: Number
    color: {
        doors:"white",
        wheels:"black"
    },   // Data Type: Object
    isElectric: false, // Data Type: Boolean
    howToStart: function(){
        console.log("Start engine");
    },
};
car.howToStart();

//Agar siz ushbu bosqichgacha hamma kodlar oxshagan bolsa tabriklayman siz ozingizni 1chi metodingizni yaratdingiz

//Keling car objectimiz ichidagi propertylarni colors objektining propertylarini olaylik

// const doors = car.color.doors;
// const wheels = car.color.wheels;

// console.log(doors,wheels);

//lekin Javascriptda obyekt ichidagi propertylarni olish uchun
// destruptizatsiya usulidan foydalanishimiz kk


const {doors,wheels} = car.color;

console.log(doors,wheels);

//Esda saqlang Javascript Obyektga Yo'naltirilgan Dasturlash Tili hisoblanadi inglizchada
// OOP (Object Oriented Programming) deyiladi.
