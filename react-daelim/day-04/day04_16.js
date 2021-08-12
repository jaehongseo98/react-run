const daelim = {
    name : "김대림",
    canRead : "아니오",
    canWrite : "아니오"
}

// 원본이 바뀐다
// const selfStudy = () => {
//     daelim.canRead = "네"
//     daelim.canWrite = "네"
//     return daelim
// }


// const selfStudy = (person) => {
//     person.canRead = "네"
//     person.canWrite = "네"
//     return person
// }


// 순수함수 : 원본의 값을 바꾸지 않는다 (Side Effect가 없다), 반드시 인수가 1개 이상 있어야 한다.
const selfStudy = (person) => ({
    ...person,
    canRead : canRead = "네",
    canWrite : canWrite = "네"
})
console.log(selfStudy(daelim))
console.log(daelim)