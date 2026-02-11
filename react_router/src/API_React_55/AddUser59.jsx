import { useState } from "react";


function AddUser59(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const adduserdata =async ()=>{
        const url = "http://localhost:3000/users";
        
        const data = {
            name : name,
            email : email,
            address : address
        }

        let response = await fetch(url,{
            method : 'post',
            body : JSON.stringify(data)
        });

        response = await response.json();

        if(response){
            alert("User added successfully");
        }
    }


    return(
        <>
           <h1>Add User 59</h1>

           <input type="text" onChange={(e)=>setName(e.target.value)} id="name"placeholder="Enter name" /><br /><br />
           <input type="text" onChange={(e)=>setEmail(e.target.value)} id="email" placeholder="Enter email" /><br /><br />
           <input type="text" onChange={(e)=>setAddress(e.target.value)} id="address" placeholder="Enter adress" /><br /><br />
           <button onClick={adduserdata}>Add User</button>
        
        </>
    )
}

export default AddUser59;