import { useState } from "react";
import './valid.css';

function Validation_Input65(){

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState();

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState();

    const handleName = (event)=>{
        console.log(event.target.value);
        if(event.target.value.length > 5){
            setNameErr("Please enter valid userName. only 5 characters are allowed");
        }else{
            setNameErr("");
        }
    }

    const handlePassword = (event)=>{
        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if(event.target.value.length > 8){
            setPasswordErr("Please enter valid password. only 8 characters are allowed");
        }else{
            setPasswordErr("");
        }

        
    }

    return(
        <div>
            <h1>Validation Input</h1>

            <div>
                <input type="text" placeholder="Enter your name" onChange={handleName} />
                <span className="red-color">{nameErr && nameErr}</span>
                <br /><br />
                <input type="password" placeholder="Enter Password" onChange={handlePassword} />
                <span className="red-color">{passwordErr && passwordErr}</span>

                <br /><br />
                <button disabled={nameErr || passwordErr}>Login</button>
            </div>
        </div>  
    )
}

export default Validation_Input65;