'use strict'

const p = document.querySelector('p')

console.log(p)

// endi dynamic tarzda script yaratamiz va ulaymiz

 const script = document.createElement('script')

script.src = 'js/dynamicNewScript.js'

document.body.append(script)

//consoleda korishmiz mn bizda yangi script file yaratildi va ulandi lekin bunaqa filelar 4 5ta bolishi mn shunaqa holatda universal
//funksiya yaratish tavfsiya etiladi

function scriptCreator(src){
    const script = document.createElement('script')

    script.src = src

    document.body.append(script)
}

scriptCreator('js/dynamicNewScript.js')
scriptCreator('js/dynamicNew2ndScript.js')

//bu yerda async ham avtomatik tarzda qoshilgan boladi