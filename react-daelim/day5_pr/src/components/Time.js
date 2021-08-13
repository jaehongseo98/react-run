import {Component} from "react";
import React from "react";

class Time extends Component {
    constructor (props) {
        super(props)
        this.state = {
            time: new Date()
        }
    }
    componentDidMount () {
        // 컴포넌트가 화면에 출력되었을 때
        this.timerId = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount () {
        // 컴포넌트가 화면에서 제거될 때
        clearInterval(this.timerId)
    }
    render() {
        return (
            <div className="App">
                <h3>{this.state.time.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Time;
