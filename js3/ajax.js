'use strict';
//AJAX = Asynchronous JavaScript And XML

//AJAX vazifasi- Sahifani yangilamasdan turib serverga malumotlar bilan birga
// dinamik tarzda sorovlar yuborish va yangilamasdan turib sererdan qaytgan malumotlarni olish

const usz = document.querySelector('#usz')
const usd = document.querySelector('#usd')

usz.addEventListener('input', (e) => {
    const request = new XMLHttpRequest()

    console.log(request)

    request.open('GET','json/currency.json')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('readystatechange',()=>{
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const data = JSON.parse(request.response)
            usd.value = (+usz.value / data.currency.usd).toFixed(2)
        }
        // else if (request.readyState === 4 && request.status === 200) {
        //     const data = JSON.parse(request.response)
        //     usz.value =(+usd.value * data.currency.usd).toFixed(2)
        // }
        else {
            usd.value = 'Something went wrong'
        }
    })

    //status kodini qaytaradi. 200-ok, 404-not found, 500-server
    //statusText
    //response
    //readyState

})
