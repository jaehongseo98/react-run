// reduce

const ages = [21, 19, 52, 11, 66, 33]

const maxAge = ages.reduce(
    (max, age) => {
        console.log(`${age} > ${max} = ${age > max}`)
        if(age > max) {
            return age
        }else {
            return max
        }
    }, 0)

console.log('최고령자의 나이는 ', maxAge)