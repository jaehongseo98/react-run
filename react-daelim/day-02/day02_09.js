// // 호이스팅 : 함수가 파일의 맨 앞에 정의된 것처럼 처리되기 때문에 정상 작동함
// hello() // 정상 실행 OK
// // 함수 선언
// function hello(){
//     console.log("안녕")
// }
// hello()


hello() // ReferenceError: Cannot access 'hello' before initialization
// 함수 표현식
const hello = function (){
    console.log("안녕")
}
hello()