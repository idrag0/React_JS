

import React, { useRef } from 'react';

function Lec38useREf() {
    const inputRef= useRef(null);
    const h1Ref= useRef(null);

    const inputHandler=()=>{
        console.log(inputRef.current);
        inputRef.current.focus();
        inputRef.current.style.color='red';
    }


    const toggleHandler=()=>{
        
        if( inputRef.current.style.display !== 'none'){
            inputRef.current.style.display='none';
        }else{
            inputRef.current.style.display='inline';
        }

    }

    const h1handler = ()=>{
        h1Ref.current.style.color='blue';
        h1Ref.current.style.backgroundColor='yellow';
    }
    return(
        <>
           <h1>useRef Hook </h1>
           <button onClick={toggleHandler}>Toggle</button>
           < input ref={inputRef} type="text"  placeholder="Enter user name"/>
           <button onClick={inputHandler}>Focus on Input field</button>
        
              <h1 ref={h1Ref}>This is heading</h1>
              <button onClick={h1handler}>Style Heading</button>
        </>
    )
    
}

export default Lec38useREf;