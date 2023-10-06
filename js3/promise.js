'use strict';

// const isFriend = true
//
// const meetingRequest = new Promise((resolve, reject) => {
//     if (isFriend) {
//         const msg = 'Friend: I am here'
//         resolve(msg)
//     } else {
//         const err = 'Friend: I am busy'
//         reject(err)
//     }
// })
// // //
// meetingRequest
//     .then(() => console.log('Friend: I am here'))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('I am calling you'))

// console.log('Request data...')
//
// const req = new Promise((resolve) => {
//     setTimeout(() => {
//         const product = {
//             name: 'iPhone',
//             price: 10000,
//         }
//         console.log('Processing data...')
//         resolve(product)
//     }, 2000)
// })

// req.then((data) => console.log(data)).finally(()=> console.log('Fetching end'))

// req.then((data) => new Promise((resolve)=>{
//     setTimeout(()=>{
//         data.status = 'success'
//         console.log('Get data...')
//         resolve(data)
//     },2000)
// }))
//     .then((result) => console.log(result))
//     .finally(()=> console.log('Fetching end'))
// req.then((data)=> new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         data.status = 'success'
//         console.log('Get data...')
//         resolve(data)
//         reject(data)
//     },2000)
// }))
//     .then((result) => console.log(result))
//     .catch(()=> console.log('Data cancelled'))
//     .finally(()=> console.log('Tugadi'))

//promise method

// const request =(time)=>{
//     return new Promise((resolve)=>{
//         setInterval(()=> resolve(), time)
//     })
// }

// request(1000).then(()=> console.log('Request 1000ms'))
// request(2000).then(()=> console.log('Request 2000ms'))
// request(3000).then(()=> console.log('Request 3000ms'))

// Promise.all([request(1000), request(2000), request(3000)]).then(()=>{
//     console.log('All requests')
// })
//
// Promise.race([request(10000),request(2000), request(3000)]).then(()=>{
//     console.log('All requests')
// })