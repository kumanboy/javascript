'use strict';

// Alert

// alert("Gulasal va Jasmina");

// Confirm

// const downloadExit = confirm("saytdan chiqish xohlisanmi?");
//
// console.log(downloadExit);
// console.log(typeof downloadExit);

// Prompt

// const currentPlace = prompt("Where are you from?");
//
// console.log(currentPlace);
// Prompt string dan number

// const age = +prompt("How old are u","15")
//
// console.log(age);
//
// console.log(typeof age);
//
// console.log(age + 10);

// Array User uchun form yozamiz

// const sorovnoma = [];
//
// sorovnoma[1] = confirm("Shartlarga rozimisiz?");
// sorovnoma[2] = prompt("Ismingizni kiriting");
// sorovnoma[3] = +prompt("Yoshingizni kiriting");
// sorovnoma[4] = prompt("Emailni kiriting");
// sorovnoma[5] = prompt("Uylanganmisiz?");
// sorovnoma[6] = prompt("Malumotingizni kiriting");
//
// console.log(sorovnoma);
//
// console.log(typeof sorovnoma);

const askQuestion = prompt("Ismingizni kiriting");

if (askQuestion === null || askQuestion === "") {
    console.log("Iltimos qaytadan urinib ko'ring");
}

console.log(askQuestion);

//
