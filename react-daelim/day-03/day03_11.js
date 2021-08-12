// 스프레드(spread) 연산자
// ...

let names = ["김제덕", "안산", "여서정", "전웅태", "조구함"]

let [first, ...rest] = names // 구조 분해

console.log(rest.join(' / '))