
import React, { use } from "react";
import { useEffect } from "react";

const Counter = ({cnt,data})=> {
    const handleCounter = () => {
        console.log("handleConter called")
    }
    

    useEffect(() => {
        handleCounter();
    }, []);

    useEffect(() => {
        console.log("data calleed");
    }, [data]);

    return(
        <div>
            <h1>Counter Component</h1>
            <p>Current Count: {cnt}</p>   <p>Data : {data} </p>
        </div>
    )
}

export default Counter;

//lecture 29