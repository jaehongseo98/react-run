// import './App.css';
// import React, {useState} from "react";
// import People from "./components/People";
// function App() {
//
//     return (
//         <div className="App">
//             <People />
//         </div>
//     );
// }
//
// export default App;

// 리액트 훅스

import './App.css';
import Example from './components/Example';

function App() {
    return (
        <div className='App'>
            <Example />
        </div>
    );
}

export default App;

// import React, {Component} from "react";
//
// class App extends Component{
//     constructor (props) {
//         super(props)
//         this.state = {
//             seconds : 0
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//
//     handleChange (ev) {
//         if (ev.target.checked) {
//             this.timerId = setInterval(
//                 () => {
//                     this.setState({
//                         seconds: this.state.seconds + 1
//                     })
//                 }, 1000)
//         } else {
//             clearInterval(this.timerId)
//         }
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <input type="checkbox" onChange={this.handleChange} />
//                 <span>타이머 활성화</span>
//                 <h1>{this.state.seconds}초</h1>
//             </div>
//         )
//     }
// }
//
// export default App;

// import './App.css';
// import React, {Component} from "react";
// import Counter from './components/Counter'
// import Time from "./components/Time";
//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <Counter />
//                 <br />
//                 <Time />
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
// import React, {useState} from "react";
// import Counter from './components/Counter'
// import Time from "./components/Time";
//
// function App() {
//     return (
//         <div className="App">
//             <Counter />
//             <br />
//             <Time />
//         </div>
//     );
// }
//
// export default App;

// import './App.css';
// import React, {useState} from "react";
//
// function App() {
//     const [person, setPerson] = useState('Who are u?')
//     const click = () => {
//         alert('리액트 프로그래밍')
//         const getMembers = cnt => new Promise(
//             (resolve, rejects) => {
//                 const api = `https://api.randomuser.me/?nat=US&results=${cnt}`
//                 const request = new XMLHttpRequest()
//                 request.open('GET', api)
//                 request.onload = () =>
//                     (request.status === 200 ) ? resolve(JSON.parse(request.response).results) : rejects(Error(request.statusText))
//                 request.onerror = (err) => rejects(err)
//                 request.send()
//             })
//         getMembers(3).then(
//             members => {
//                 //alert(`${members[0].name.last}은(는) ${members[0].gender === 'female' ? '여자' : '남자'}이고 나이는 ${members[0].registered.age}살 입니다.`)
//                 //console.log(`${members[1].name.last}은(는) ${members[1].gender === 'female' ? '여자' : '남자'}이고 나이는 ${members[1].registered.age}살 입니다.`)
//                 //document.getElementById('out').innerText = `${members[2].name.last}은(는) ${members[2].gender === 'female' ? '여자' : '남자'}입니다.`
//                 document.getElementById('out').innerHTML = `${members[2].name.last}은(는) ${members[2].gender === 'female' ? '여자' : '남자'}이고<br /> 나이는 ${members[2].registered.age}살 입니다.`
//                 const texts = `${members[1].name.last}은(는) ${members[1].gender === 'female' ? '여자' : '남자'}이고 나이는 ${members[1].registered.age}살 입니다.`
//                 setPerson(texts)
//             },
//             err => console.error(new Error("랜덤유저미 사이트에서 멤버들을 로딩할 수 없습니다"))
//         )
//     }
//     const keyup = (ev) => {
//         if(ev.keyCode === 13) {
//             click()
//         }else {
//             console.log('눌렀다 뗌')
//         }
//     }
//
//     return (
//         <div className="App">
//             <input onKeyUp={keyup}/><br />
//             <button onClick={click}>전송</button><br />
//             <div id="out">Who am i?</div><br />
//             <div>{person}</div>
//         </div>
//     );
// }
//
// export default App;

// import './App.css';
//
// function App() {
//     const click = () => alert('리액트 프로그래밍')
//       return (
//         <div className="App">
//           <button onClick={click}>클릭</button>
//         </div>
//       );
// }
//
// export default App;

// import {Component} from "react";
// import React from "react";
// import './App.css';
// import Head from './components/Head'
// import Navi from './components/Navi'
// import Foot from './components/Foot'
// import Time from "./components/Time";
//
// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             checked: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick (event) {
//         this.setState({
//             checked: event.target.checked
//         })
//     }
//     render() {
//         const textStyle = {
//             color: this.state.checked ? 'blue' : 'red'
//         }
//
//         return (
//             <div className="App">
//                 <Head />
//                 <Navi />
//                 <article>
//                     <br />
//                     <input
//                         type="checkbox"
//                         onClick={this.handleClick} />
//                     <h1 style={textStyle}>글자</h1>
//                 </article>
//                 <Navi />
//                 <Foot />
//                 <Time />
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
// import {Component} from "react";
// import React from "react";
// import './App.css';
//
// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             text: ''
//         }
//     }
//     handleChange = (ev) => {
//         this.setState({
//             text: ev.target.value
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <input
//                     value={this.state.text}
//                     onChange={this.handleChange} />
//                 <h1>{this.state.text}</h1>
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
// import {Component} from "react";
// import React from "react";
// import './App.css';
//
// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             text: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange (event) {
//         this.setState({
//             text: event.target.value
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <input
//                     value={this.state.text}
//                     onChange={this.handleChange} />
//                 <h1>{this.state.text}</h1>
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
// import {Component} from "react";
// import React from "react";
// import './App.css';
//
// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//     countUp = (event) => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//
//     countDown = (event) => {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>클릭한 횟수: {this.state.count}</h1>
//                 <button onClick={this.countUp}>plus</button>
//                 <button onClick={this.countDown}>minus</button>
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
// import {Component} from "react";
// import React from "react";
// import './App.css';
//
// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//     countUp (event) {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     countDown (event) {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>클릭한 횟수: {this.state.count}</h1>
//                 <button onClick={(e) => this.countUp(e)}>플러스</button>
//                 <button onClick={(e) => this.countDown(e)}>마이너스</button>
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
// import {Component} from "react";
// import React from "react";
// import './App.css';
//
// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             time: new Date()
//         }
//     }
//     componentDidMount () {
//         // 컴포넌트가 화면에 출력되었을 때
//         this.timerId = setInterval(() => {
//             this.setState({
//                 time: new Date()
//             })
//         }, 1000)
//     }
//     componentWillUnmount () {
//         // 컴포넌트가 화면에서 제거될 때
//         clearInterval(this.timerId)
//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>{this.state.time.toLocaleTimeString()}</h1>
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
// import {Component} from "react";
// import React from "react";
// import './App.css';
//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h1>{this.props.name} 님 안녕하세요!</h1>
//                 <img src={this.props.imgUrl} />
//             </div>
//         );
//     }
// }
//
// export default App;

// import {Component} from "react";
// import React from "react";
// import './App.css';
//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h1>Hello React</h1>
//             </div>
//         );
//     }
// }
//
// export default App;

// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }
//
// export default App;
