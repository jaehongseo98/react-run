import React, { useState, useEffect } from 'react';

function Example() {
    const [num, setNumber] = useState(0);
    const [name, setName] = useState('김대림');

    // useEffect(() => {
    //     alert('안녕')
    // });

    // useEffect(() => {
    //     alert('안녕')
    // },[]);

    // useEffect(() => {
    //     alert('안녕')
    // },[name, num]);

    useEffect(() => {
        alert('안녕')
    },[name]);

    useEffect(() => {
        console.log('저는 카운터가 바뀔때 동작합니다')
    },[num]);

    const cnt = () => setNumber(num + 1)
    const naming = () => setName('박대림')

    return (
        <div>
            <button onClick={cnt}>카운터</button><br />
            <button onClick={naming}>이름변경</button><br />
            <span>{num}</span><br />
            <span>{name}</span><br />
        </div>
    );
}
export default Example;