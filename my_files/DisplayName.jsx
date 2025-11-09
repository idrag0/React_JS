import { useState } from 'react';
import User from '../myProject/src/User';

function DisplayName(){
    const [display,setDisplay] = useState(true);

    return(
        <div>
            <h1>Toggle in React Js</h1>

            {
                display ? <User /> : null
            }

            <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </div>
    )
}
export default DisplayName;


// lecture 16

