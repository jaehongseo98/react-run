// 객체와 배열 part 1

const sandwich = {
    bread: "더치 크런치",
    meat: "돼지고기",
    cheese: "까망베르",
    toppings: ["토마토", "피크", "상추", "싸우전드아일래드"]
}

let {bread, meat} = sandwich; // 분해

console.log(`${sandwich.bread} ${sandwich.meat}`)
console.log(bread, meat)

bread = "마늘"
meat = "양고기"

console.log(bread, meat)
console.log(sandwich.bread,  sandwich.meat)


