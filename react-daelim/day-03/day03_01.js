// 객체와 배열 part2
// 객체를 인수로
var who = regularPerson => {
    console.log(`대림대학교의 ${regularPerson.firstname}`)
}

var regularPerson = {
    firstname : "대림",
    lastname : "김"
}

who(regularPerson)