//                   lecture => 25 Assigment

import { useState } from "react";

function Clock({color}){
    const [today, setTime] = useState(0);
    const time= () => (setTime(new Date().toLocaleTimeString()))

    setInterval(time, 1000)

    
    return(
        <div>
            <div name="container" style={{background:"white", width:"300px" , height:"60px", borderRadius:"5px"}}>
                <h1><span style={{color : color}}>{today}</span></h1>
            </div>
        </div>
    )

}

export default Clock;