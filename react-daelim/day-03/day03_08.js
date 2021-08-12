// 바벨이 아래 코드들 구버전의 브라우저에서 사용 가능한 코드로 변환 (리눅스 실습)

// npm init -y
// npm i @babel/core
// npm i @babel/cli
// npm i @babel/plugin-transform-arrow-functions
// npm i @babel/plugin-transform-template-literals
// npm i @babel/preset-react

// 변환
// npx babel .\WebstormProjects\day03\day03_08.js --presets=@babel/preset-react --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions

// babel.config.js 프로젝트 루트에 생성하고
/*
const presets = ['@babel/preset-react'];
const plugins = [
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-arrow-functions'
]
module.exports = {presets,plugins};
 */

// 더 이상 옵션 설정을 할 필요없이 변환
// npx babel .\WebstormProjects\day03\day03_08.js

// 구버전 브라우저에서 사용할 파일 생성
// npx babel .\WebstormProjects\day03\day03_08.js -o .\WebstormProjects\day03\day03_08_old.js

const r = <div>test</div> // JSX
const t = `type : ${r.type}` // 템플릿 문자열
const plus = (x, y) => x+y // 화살표 함수

console.log(plus(1, 2))