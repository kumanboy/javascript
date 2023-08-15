'use strict';

// const age = +prompt("How old are u","13");
//
// if(age >= 18){
//     console.log("You are adult");
// }else{
//     console.log("You are not adult");
// }

// const age = +prompt("How old are u","18");
//
// if(age >= 21){
//     console.log("Horror Movies");
// }else if (age >= 18 && age < 21){
//     console.log("Fight Movies");
// }
// else{
//     console.log("Cartoons");
// }

//ternary operator

const age = +prompt("How old are u","13");

// if(age>=18){
//     console.log("You are adult");
// }else{
//     console.log("You are not adult");
// }

(age >= 18) ? console.log("You are adult") : console.log("You are not adult");

//bu yerda ? belgisi IFni anglatadi  : ELSEni anglatadi

//Switch Case

const color = 2;
//
switch(color){
    case 2:
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Go Home Nigga");
}