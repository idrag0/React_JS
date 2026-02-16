import { useEffect, useEffectEvent, useState } from "react";

function UseEffectEvent71(){

    const [count, setCount] = useState(0);

    const countControl = useEffectEvent( ()=>{
        setCount(count + 1);
    });

    useEffect( ()=>{
        const inter = setInterval( ()=>{
            countControl();
        },1000);

        console.log(inter);

        return () => clearInterval(inter);
    },[] );

    return(
        <div>
            <h1>UseEffectEvent71</h1>

            <h2>{count}</h2>
        </div>
    )
}

export default UseEffectEvent71;