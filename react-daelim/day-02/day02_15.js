// 배열에 1부터 20까지의 수가 존재
// 숫자들 중 짝수에 해당되는 수들의 제곱값을 출력
// 단, 처음 다섯 수만 출력한다.
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

let count = 0
let result = ''

for(let i = 0; i < numbers.length && count < 5; i++){
    if(numbers[i] % 2 === 0){
        result = result + (result === '' ? '' : ', ') + Math.pow(numbers[i], 2)
        //console.log(result)
        count++
    }
}
console.log(result)