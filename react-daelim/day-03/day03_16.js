// 함수형 프로그래밍
// 함수는 1급 시민
// 장점 : 불변성, 고차함수(함수를 인수로 던지거나, 함수를 리턴하거나, 함수를 변수에 대입가능한) ...
// 해당 기술을 지원하는 프라미스, 스프레드 연산자, 화살표 함수 ...

const messages = [ "함수를 배열에 넣을수도 있음", message => console.log(message), "일반 값", message => console.log(message) ]

messages[3](messages[0])
messages[1](messages[2])
console.log(messages[0])