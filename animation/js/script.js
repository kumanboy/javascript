'use strict';

//setTimeout methodi

// setTimeout(() => {
//     console.log('hello');
// }, 3000);

//biz setTimeout methodimizni bir ozgaruvchiga saqlab olishimiz kerak

const btn = document.querySelector('#btn');

function myAnimation() {
  const car = document.querySelector('.car');
  let pos = 0;

  const timerId = setInterval(frame, 10);

  function frame() {
    if (pos === 700) {
      clearInterval(timerId);
    } else {
      pos++;
      car.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnimation);
