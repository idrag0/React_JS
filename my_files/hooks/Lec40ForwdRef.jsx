import { useRef } from "react";
import UserInput40 from "./UserInput40";

function Lec40ForwdRef(){
    const inputRef = useRef(null);

    const updateInput = () =>{
        console.log("hello");
        inputRef.current.value=10000;
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.style.fontSize="20px";
    }

    return(
        <div>
            <h1>Forward Ref</h1>
            {/* <input type="text" ref ={inputRef} /> */}
            <UserInput40 ref={inputRef} />
            <button onClick={updateInput}>Update Input field</button>
        </div>
    )
}

export default Lec40ForwdRef;