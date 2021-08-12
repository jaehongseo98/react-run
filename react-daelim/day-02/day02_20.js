// 객체 리턴 : 객체를 리턴 받고자 할 때는 소괄호로 묶어줘야 한다

const person = (firstName, lastName) => ({
    first : firstName,
    last : lastName
})

console.log(person("대림", "김"))
