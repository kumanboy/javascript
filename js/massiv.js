'use strict';

// const arr = [1, 2, 3, 4, 5,'Husan','uzbekistan'];
//
// arr.forEach((element,index)=>{
//     console.log(`${index}: ${element}`);
// })

//pop method arraydagi oxirgi elementini olib tashlaydi

// arr.pop();
//
// console.log(arr);

//push method arraydagi oxirgi elementga yangi element qoshadi

// arr.push('gulasal');
// // //
// console.log(arr);

//shift method array boshidagi elementni olib tashlaydi
//unshift method array boshidagi elementni qoshadi
//shift va unshift ishlatish maslahat bermayman chunki massiveni
//qaytadan ishlab chiqadi

//loop hosil qilamiz arraylar bilan
//
//  for (let i = 0; i < arr.length; i++) {
//      console.log(arr[i]);
// }
 //massivelarimiz qiymatini olishimiz uchun length propertysini ishlatamiz

// Eslatma for in orqali objectlarimizni loop qilishimiz mumkin edi for of bilan esa
// arraylarimizda qilishimiz mumkin edi kelinglar for of orqali buni sinab koramiz

// for (let element of arr){
//     console.log(element);
// }
//Suhbatlarda soraladigan savollardan biri
//length propertysi massivelarimiz ichidagi qiymatlarni sanab otirmaydi
// massive ichidagi oxirgi indexga 1ni qoshib qoyadi
// const arr = [1, 2, 3, 4, 5];
//
// arr [99]= 'malik'
//
// console.log(arr.length);

//consoleda 5 ciqadi

//lekin biz hozir oxirgi indexga yangi index qoshadigan bolsak
//length xato ishlaydi

//ushbu xolatda 99chi indexga 0 qiymat beryapmiz consoleda koradigan bolsak
//bizga 100ta element bor deb korsatadi

// console.log(arr.length)

//arrayimizni consoleda koradigan bolsak massivemizni 94ta bosh element bor deb
//korsatadi

// console.log(arr);

//yana bir ajoyib va ommabop loop, juda kop foydalanamiz yaxshiroq organib olinglar ushbu methodni
//
// arr.forEach(function (item, index,arr) {
//     console.log(`${index}: ${item} massivimiz bu ${arr}`);
// })


//forEach nechta parametr qabul qiladi deb suhbatlarda kop sorashadi,va sizning javobingiz 3ta deb javob berishingiz kerak
//1-parametr bu element, 2-parametr bu index, 3-parametr bu massivening ozi
//consoleda koramiz.
//forEach avfzal tarafi unda callback funksiyasi doyim ishlaydi.
//for of orqali esa break va continue kalit sozlarini ishlatsak boladi

//kelinglar foydaluvchiga savol beraylik hamda u massive qabul qilsin

// const movies = prompt('What is your favorite movies?');
// //split methodi orqali massive olishimiz mumkin. split metodini ichida splitter va limit bor biz split bilan ishlimiz.
// //split metodi ishlatish uchun qanaqadir belgi yozishimiz kerak, massive hosil bolishi un , qoyamiz
// const userMovies = movies.split(', ');
// // console.log(userMovies);
// //join methodi orqali massivemizni elementlarini string malumot turida olishimz mn
// console.log(userMovies.join('-'));
// sort methodi alfabet boyicha tartiblab beradi
// userMovies.sort();
// console.log(userMovies);
//sort methodi raqamlar tartiblashi uchun bitta callback function yaratilish kk.

const arr = [1, 2, 3, 4, 5,23,414,42,6,44,76,24];
//
// arr.sort(shuhratFn);
// console.log(arr);
// function shuhratFn(a,b){
//     return a-b;
// }
//Eslatma callback functionlar chaqirilmidi. Agar biz raqamlarimizni
//tartib bo'yicha kormoqchi bolsak albatta callback function ishlatishmiz kk aks holda biz natijga erisha olmaymiz

//arrow function orqali kodlarmizni qisqartirsak boladi

// arr.sort((a,b)=>a-b);
//
// console.log(arr);




