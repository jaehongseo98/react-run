// 객체 리터럴 개선 (Object literal enhancement)
// 구조 분해의 반대 개념. 객체를 다시 만들어 내는 과정 또는 내용을 한데 묶는 과정

// 변수
let name = "김제덕"
let sports = "양궁"

// 함수 표현식
let print = function (){
    console.log(`${this.name}은 ${this.sports} 선수 입니다`)
}

let olympic = { name, sports, print } // 객체 리터럴 개선, 메서드 추가

console.log(olympic)
olympic.print()
console.log(olympic.name)