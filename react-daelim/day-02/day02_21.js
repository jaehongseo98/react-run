// 화살표 함수의 스코프

// this는 gangwon을 의미
const gangwon = {
    resort: ["용평", "평창", "홍천", "강릉"],
    print: function (delay=1000){
        setTimeout(
            () => { console.log(this.resort.join(", ")) }
            , delay)
    }
}
gangwon.print()

// Error
// const gangwon = {
//     resort: ["용평", "평창", "홍천", "강릉"],
//     print: function (delay=1000){
//         setTimeout(function (){
//             console.log(this.resort.join(", "))
//         }, delay)
//     }
// }
// gangwon.print()
