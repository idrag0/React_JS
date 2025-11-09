import React, { useState } from 'react';
const Counter = () =>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClickCapture={()=> setCount(count + 1)}>Update Counter </button>
        </div>
    )
}

export default Counter; 

// lecture no 15