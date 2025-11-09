import React, { useState } from "react";
import Counter from "./Counter.jsx";

function ProUseEffect(){
    const [cnt, setCount] = useState(0);
    const [data, setData] = useState(0);
    return(
        <div>
            <Counter cnt={cnt} data={data}/>

            <button onClick={()=> setCount(cnt + 1)}>counter</button>
            <button onClick={()=> setData(data + 1)}>Data</button>
        </div>
    )
}

export default ProUseEffect;

/// lecture 29