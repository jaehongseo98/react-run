// 객체와 배열 part2
// 배열 구조 분해

const animals = ["호랑이", "코끼리", "늑대"]

//const [first] = animals // 구조 분해
//console.log(first)

// const [first, second, third] = animals // 구조 분해
// console.log(third)

const [, second, ] = animals // 구조 분해
console.log(second)