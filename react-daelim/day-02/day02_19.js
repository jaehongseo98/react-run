// 화살표 함수

const olympic = (sports, name) => {
    if(!sports){
        throw new Error("종목이 없습니다")
    }
    if(!name){
        throw new Error("올림픽 함수에 선수 이름을 주어야 합니다")
    }

    return `${name}은(는) ${sports} 선수 입니다`
}

console.log(olympic("윤지수", "펜싱"))
console.log(olympic())

// var olympic = function (sports, name) {
//     if(!sports){
//         throw new Error("종목이 없습니다")
//     }
//     if(!name){
//         throw new Error("올림픽 함수에 선수 이름을 주어야 합니다")
//     }
//
//     return `${name}은(는) ${sports} 선수 입니다`
// }
//
// console.log(olympic("윤지수", "펜싱"))
// console.log(olympic())