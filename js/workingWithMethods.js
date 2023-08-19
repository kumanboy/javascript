'use strict'

const box = document.querySelector('#box');
const buttons = document.querySelectorAll('button');
const circle = document.querySelectorAll('.circle');
const hearts = document.querySelectorAll('.heart');
const circleWrapper = document.querySelector('.circle__wrapper');


//boxga style beramiz. kelinglar kok rangda yashil rangga ozgartirmiz, height va widthlarni ham ozgartirib olamiz

box.style.backgroundColor = 'green';
box.style.height = '100px';
box.style.width = '200px';

//boxga style bergan paytimizda 3 qator kod ortiqcha yozildi aynan bir qatorda style bermochiq bolsak styledan song cssText
//ishlatishimiz kerak

// box.style.cssText = 'background-color: green; height: 100px; width: 200px;';

//buttons ham style beramiz. buttons taglarimiz massive bolgani uchun ularga style berib bolmaydi.aynan bittasiga
//style bermoqchi bolsak index korsatib style beramiz
// buttons.style.backgroundColor = 'red';

buttons[0].style.width = '100px';

//circlega ham style bermoqchi bolsak u massive qaytarganligi sabab index korsatishga majburmiz

circle[1].style.backgroundColor = 'blue';

//heartsga ham style bermoqchi bolsak u massive qaytaradi lekin 3tasiga bittada style berish 2 usuli bor
// bilamizki bu massive holatida NodeListElement qaytaradi forEach yordamida yoki for yordamida amalga oshirsak boladi.

//1 bu usul ishlatish kerak
// hearts.forEach(heart => {
//     heart.style.backgroundColor = 'blue';
// })
//
// //2 ozroq eski usul
// for (let i of hearts) {
//     hearts[i].style.backgroundColor = 'blue';
// }

//kelinlar html filemizdagi buttons tagimizga yangi button qoshaylik. buning uchun createElement() metodi orqali amalga oshiramiz
//
// const newButton = document.createElement('button');
//
// //biz hozir button yaratib oldik lekin uni html filemizga qoshmadik buning uchun quyidagi kod yoziladi
//
// document.body.append(newButton);

// oddiy text qoshmoqchi bolsal

// const text = document.createTextNode('Hello niggas i am new text ');

// yana kodlarimizni kucaytiramiz endi circle__wrapper classimizni ichiga yangi buttonlar qoshamz

const newCircle = document.createElement('div');

newCircle.classList.add('circle'); //add('') classListga class qoshadi

//endi yaratib oldik va qoshamiz

// document.body.append(newCircle); //brauzerda circle hozil boldi lekin biz uni A B C D circle yonidan qoshishimiz kerak
//buning uchun circle__wrapper classimizni javascriptda saqlab olishimiz kerak boladi. va biz endi document orniga
//circleWrapperga qoyamiz
// circleWrapper.append(newCircle);
//
// //endi biz yaratgan tagimizni undan oldin yoki keyin qoysak boladi buning uchun befora hamda after methodlarini ishlatamiz
//
// // circleWrapper.before(newCircle)
// // circleWrapper.after(newCircle)
//
// //circle oldidan qoyish un esa quyidagi kod yoziladi
//
// circle[0].before(newCircle)
// circle[0].after(newCircle) //keyin joylashadi
//
// //remove method tagimizni olib tashlaydi
//
// circle[1].remove();
//
// //agar biz circle ichidagi bitta tagimiz orniga ozimiz yasagan tagimizni qoymoqchi bolsak replaceWith() metodini ishlatamiz
//
// circle[0].replaceWith(newCircle);

// circleWrapper.append(newCircle);
//
// //newCircle ichiga text yozishimiz kerak
//
// newCircle.innerHTML = 'E';// bu yerda biz tag ham yozsak boladi '<strong>E</strong>'
//
// newCircle.textContent = 'E'; //faqat text  ozini yozmoqchi bolsak textContent ishlatamiz

// keyingi methodimiz insertAdjacentHTML() metodini ham sinab koramiz

circleWrapper.insertAdjacentHTML("beforebegin", '<pre class="circle">A</pre>');

