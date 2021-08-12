// 객체와 배열 part2
// 객체 구조 분해

var who = ({firstname}) => {
    console.log(`대림대학교의 ${firstname}`)
}

var regularPerson = {
    firstname : "대림",
    lastname : "김"
}

who(regularPerson)