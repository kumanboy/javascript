'use strict'

const email = document.querySelector('.email'),
    firstName = document.querySelector('.name'),
    formSubmit = document.querySelector('form'),
    doc = document.querySelector('.doc')//,
    // remove = document.querySelector('.remove')

//set item
//
// localStorage.setItem('email', 'example@mail.com')

//get item
// const email = localStorage.getItem('email')
// console.log(email)
//
// doc.textContent = `${email}`
//
// //remove item
//
// remove.addEventListener('click', () => {
//     localStorage.removeItem('email')
// })

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = {
        email: email.value,
        name: firstName.value,
    }

    e.target.reset()

    localStorage.setItem('user', JSON.stringify(user))
})

const user = JSON.parse(localStorage.getItem('user'))

doc.textContent = `${user.name}`