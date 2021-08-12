// "I Love YOU!" 문자열의 공백을 "i-love-you!"

// 선언형
// const msg = 'I Love You'
//
// const newMsg = msg
//     .replace(/ /g, "-")
//     .toLowerCase()
// console.log(newMsg)

// feat. 최준원
// const talk = function(t){
//     return function (msg){
//         t(msg.toLowerCase().split(" ").join("-"))
//     }
// }
//
// const tmi = talk(msg => console.log(msg))
// tmi("I Love You!");

// feat. 임성현
const msg = 'I Love You'
const newMsg = msg.toLowerCase().replace(/ /g, '-')
console.log(newMsg)