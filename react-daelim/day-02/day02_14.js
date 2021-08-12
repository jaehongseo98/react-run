const num = [];
let str = '';
for (let i = 1; i < 21; i++) {
    num.push(i);
}

let nums = num.filter((v) => v % 2 === 0).map((v) => v * v);
let nums2 = nums
    .filter((v, i) => {
        return i < 5 ? v : '';
    })
    .map((v, i) => {
        return i < 4 ? (str += v + ',') : (str += v);
    });

console.log(nums2);

// for (let i = 1; i < 21; i++) {
//     if (num[i] % 2 !== 0) {
//         console.log(i * i);
//     }
// }

// const numbers = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// let count = 0;
// let result = '';

// for (let i = 0; i < numbers.length - 1 && count < 5; i++) {
//     if (numbers[i] % 2 === 0) {
//         result = result + (result === '' ? '' : ', ') + Math.pow(numbers[i], 2);
//         count++;
//     }
// }
// console.log(result);

// const numbers = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// console.log(
//     numbers
//         .filter((x) => x % 2 === 0)
//         .slice(0, 5)
//         //.map(x => x**2)
//         .map((x) => Math.pow(x, 2))
//         .join(', '),
// );
