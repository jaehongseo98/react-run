// 스프레드(spread) 연산자
// ...

// 봉우리 배열(원본)의 순서가 바뀌는 문제
// let peaks = ['대청봉','중청봉','소청봉']
// let [last] = peaks.reverse()
//
// console.log(last)
// console.log(peaks.join(' / '))

// 원본은 유지
let peaks = ['대청봉','중청봉','소청봉']
let [last] = [...peaks].reverse() // 스프레드 연산자로 peaks를 복사한 후 reverse함수 수행

console.log(last)
console.log(peaks.join(' / '))