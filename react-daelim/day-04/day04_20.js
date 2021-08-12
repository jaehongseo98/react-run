// 객체 배열
let univs = [
    { name : "Daelim"},
    { name : "Dasan"},
    { name : "Insan"},
    { name : "Inha"}
    ]

// const editName = (oldUniv, newUniv, arr) =>
//     arr.map(
//         u => {
//             if(u.name === oldUniv){
//                 return {
//                     ...u,
//                     newUniv
//                 }
//             }else{
//                 return u
//             }
//         }
//     )

const editName = (oldUniv, newUniv, arr) =>
    arr.map(u => (u.name === oldUniv) ? { ...u, newUniv } : u)

let updateUnivs = editName("Insan", "Ansan", univs)

console.log(updateUnivs[2])
console.log(updateUnivs)
console.log(univs[2])
console.log(univs)

