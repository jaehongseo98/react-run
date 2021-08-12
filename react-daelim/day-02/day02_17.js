// 바벨이 아래 코드들 구버전의 브라우저에서 사용 가능한 코드로 변환 (리눅스 실습)

// npm init -y
// npm i @babel/core
// npm i @babel/cli
// npm i @babel/plugin-transform-arrow-functions
// npm i @babel/plugin-transform-template-literals
// npm i @babel/preset-react
// npx babel 파일이름 --presets=@babel/preset-react --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions


const r = <div>test</div> // JSX
const t = `type : ${r.type}` // 템플릿
const plus = (x, y) => x+y // 화살표 함수

console.log(plus(1, 2))