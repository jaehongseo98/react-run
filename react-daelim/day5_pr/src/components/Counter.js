import React, {Component} from "react";

class Counter extends Component{
    constructor (props) {
        super(props)
        this.state = {
            cnt: 0
        }
    }
    render() {
        return (
            <div>
                <span>{this.state.cnt}</span><br />
                <button onClick={() => this.setState({cnt:this.state.cnt + 1})}>더하기</button><br />
                <button onClick={() => this.setState({cnt:this.state.cnt - 1})}>빼기</button><br />
            </div>
        );
    }
}

export default Counter;


// import React, {useState} from "react";
//
// function Counter(){
//     const [cnt, setCount] = useState(0)
//     const plus = () => setCount(cnt+1)
//     const minus = () => setCount(cnt-1)
//     return (
//         <div>
//             <span>{cnt}</span><br />
//             <button onClick={plus}>더하기</button><br />
//             <button onClick={minus}>빼기</button><br />
//         </div>
//     );
// }
//
// export default Counter;