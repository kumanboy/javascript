"use strict";

const wrapper = document.querySelector('.btn-block')

const btns = document.querySelectorAll('button')

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.classList.contains('blue')) { //contains orniga matches ishlatsak ham boladi
        console.log('btn click')
    }
})

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red')
})

const btn = document.querySelector('.btn')
btn.classList.add('red')
wrapper.append(btn)
