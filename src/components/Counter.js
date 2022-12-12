import React, { useState } from 'react'
import Button from './button';

const  Counter = () => {
    const [state, setState] =
    useState("Duff");

    function changeName() {
        setState("praise")
    }
    const [count, setCount ] = useState(0.000001);
    
    function increaseValue() {
        setCount(count + 0.01000000)
    }
    function decreaseValue() {
        setCount(count - 0.01000000)
    }

  return (
    <div>
    <h1>Counter App</h1>
    <p>{state}</p>
    <button onClick={changeName}>change Name </button>
    <h1>{count}</h1>
    <button onClick={increaseValue}>INCREMENT</button>
    <button onClick={decreaseValue}>DECREMENT</button>
    </div>
  )
}

export default Counter