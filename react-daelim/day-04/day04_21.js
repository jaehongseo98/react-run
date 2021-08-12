// 객체
const univs = {
    "Daelim" : 100,
    "Dasan" : 7,
    "Ansan" : 27,
    "Inha" : 19
}

const univsArr = Object.keys(univs).map(key => ({
    name : key,
    stdCount : univs[key]
})
)

console.log(univsArr)