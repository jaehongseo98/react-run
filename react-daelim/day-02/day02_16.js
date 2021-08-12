// 배열에 1부터 20까지의 수가 존재
// 숫자들 중 짝수에 해당되는 수들의 제곱값을 출력
// 단, 처음 다섯 수만 출력한다.

// 함수형 프로그래밍
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

console.log(
    numbers
        .filter(x => x % 2 === 0)
        .slice(0, 5)
        //.map(x => x**2)
        .map(x => Math.pow(x, 2))
        .join(', ')
)



// feat. 유민재
// let cnt = 1
// for(let i of numbers) {
//     if (i % 2 === 0 && cnt <= 5) {
//         process.stdout.write(i ** 2 + ', ');
//         cnt += 1
//     }
// }