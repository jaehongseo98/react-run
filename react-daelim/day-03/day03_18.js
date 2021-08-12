// 함수형 프로그래밍
// 함수는 1급 시민
// 장점 : 불변성, 고차함수(함수를 인수로 던지거나, 함수를 리턴하거나, 함수를 변수에 대입가능한) ...
// 해당 기술을 지원하는 프라미스, 스프레드 연산자, 화살표 함수 ...

const talk = function (t) {
    return function (msg) {
        t(msg.toUpperCase() + "!")
    }
}
const tmi = talk(msg => console.log(msg))
tmi("함수가 함수를 반환")
tmi("talk는 함수를 반환")
tmi("tmi는 talk가 리턴한 함수를 가리킨다")