// 화살표 함수

// const goodJob = function (name, msg){
//     return `${msg} ${name}`
// }
// console.log(goodJob("김대림", "참 잘했어요."))
// console.log(goodJob("정대림", "잘했어요."))

// 인수가 2개
const goodJob = (name, msg) => `${msg} ${name}`


// const badJob = function (name){
//     return `열심히하세요. ${name}`
// }

// 인수가 1개
const badJob = name => `열심히하세요. ${name}`

console.log(goodJob("김대림", "참 잘했어요."))
console.log(goodJob("정대림", "잘했어요."))

console.log(badJob("김대림"))
console.log(badJob("정대림"))