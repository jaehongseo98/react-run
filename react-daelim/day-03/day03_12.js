// 스프레드(spread) 연산자
// ...
// 스프레드 연산자로 인수를 배열로 변환
// 인수 중 일부를 배열로 처리
function tour(...cities){
    let [start, ...rests] = cities
    let [finish, ...stops] = rests.reverse()

    //console.log(stops)
    console.log(`${cities.length} 도시를 여행합니다`)
    console.log(`${start}에서 출발~`)
    console.log(`최종 목적지는 ${finish}!`)
    console.log(`거쳐가는 도시는 ${stops.length}군데 입니다`)
    console.log(`거쳐가는 도시 순서는 ${stops.reverse()}순 입니다`)
}

tour("인천", "수원", "대전", "대구", "부산")