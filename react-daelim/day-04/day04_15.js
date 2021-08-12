// const countdown = (value, fn, delay=1000) => {
//     fn(value)
//     return (value > 0) ?
//         setTimeout(() => countdown(value-1, fn), delay) :
//         value
// }
//
// const log = value => console.log(value)
// countdown(10, log)

// feat. 유민재
let count = 10
const timerId = setInterval(() => {
    console.log(count)
    count--
}, 1 * 1000)

setTimeout(() => {
    console.log(count)
    clearInterval(timerId)
},10 * 1000)
