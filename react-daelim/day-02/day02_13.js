// 기본 매개변수 (객체)
const defaultHuman = {
    name : {
        last : "조",
        first : "구함"
    },
    sports: "유도",
    ranking : 2
}

function olympicSports(human = defaultHuman){
    console.log(`${human.name.last}${human.name.first}은 ${human.sports} 선수입니다`)
    console.log(`${human.sports}에서 ${human.ranking}등 했습니다`)
}

olympicSports({
    name : {
        last : "김",
        first : "연경"
    },
    sports: "배구",
    ranking : 4
})

olympicSports()
// olympicSports(77) // error