'use strict'

function sayHello() {
    console.log('Hello');
}


sayHello()

function sayBye() {
    console.log('Bye');
}
sayBye()

const arr = [1, 2, 3,23,44,94,12],

    sorted = arr.sort(compareNum);

    function compareNum(a, b) {
        return a - b;
    }

console.log(sorted)

//qolda debugger ham yozsak boladi

// function itIsDebugger() {
//         console.log('It is debugger')
//         debugger
// }
//
// itIsDebugger()