// 스프레드(spread) 연산자
// ...

let peaks = ['대청봉','중청봉','소청봉']
let canyons = ['천불동계곡', '가야동계곡']
let seorak = [...peaks, ...canyons]

console.log(seorak)
console.log(seorak.join(' / '))