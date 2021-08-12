// 객체 리터럴 개선 (Object literal enhancement)
// 구조 분해의 반대 개념. 객체를 다시 만들어 내는 과정 또는 내용을 한데 묶는 과정

// 변수
let name = "전웅태"
let sports = "근대5종"
let medal = "동메달"

let player = {
    name : name,
    sports : sports,
    medal : function (){
        console.log(`${medal} ${medal} ${medal}`)
    },
    speed: function (kmh){
        this.speed = kmh
        console.log('속력(kmh): ', kmh)
    }
}

player.medal()
player.speed("매우빠름")
console.log(JSON.stringify(player))