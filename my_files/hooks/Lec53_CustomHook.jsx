
import useToggle from './useToggle.jsx';
import React from 'react';

export default function Lec53_CustomHook(){

    const [value, toggleVal] = useToggle(true);

    console.log(value);
    return(
        <div>

            <button onClick={toggleVal}>Toggle Heading</button>
            <button onClick={()=>{toggleVal(false)}}>Hide Heading</button>
            <button onClick={()=>{toggleVal(true)}}>Show Heading</button>


            {
                value ? <h1>Custom Hook in React JS</h1> : null
            }


        </div>
    )
}