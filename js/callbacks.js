'use strict';

// function first(){
//     setTimeout(()=>{
//         console.log(1);
//     } ,1000)
// }
//
// function second(){
//     console.log(2);
// }
//
// first();
// second();


function edu(subject,callback){
    console.log(`I'm studying ${subject}`);
    callback();
}
//
// function done(){
//     console.log("Good luck :)");}
//
// edu("javascript",done);

function first(cb){
    setTimeout(()=>{
        console.log(1);
        cb();
    },1000)
}

function second(){
    console.log(2);
}

first(second);
