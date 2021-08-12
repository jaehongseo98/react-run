// 원본은 배열
const univs = ['Daelim', 'Insan', 'Inha']

console.log(univs.join(', ')) // 문자열
console.log(univs.join('\n')) // 문자열
console.log(univs.filter(univ => univ[0] === "I")) // 배열
// 객체의 배열
const objUniv = univs.map(univ => ({ name : univ }))
console.log(objUniv)

// 템플릿 문자열
const strUniv = univs.map(univ => `${univ} University`)
console.log(strUniv.join('\n'))

