"use strict";

const wrapper = document.querySelector('.btn-block')

const btns = document.querySelectorAll('button')

// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.classList.contains('blue')) { //contains o'rniga matches ishlatsak ham boladi
//         console.log('btn click')
//     }
// })

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red')
})
//
const btn = document.querySelector('.btn')
btn.classList.add('red')
wrapper.append(btn)


btn.addEventListener('click', () => {
    btns[2].classList.toggle('blue')
})