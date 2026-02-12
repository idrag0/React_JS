import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";


// this contains lecture 61 and lecture 62 GET & PUT method and API Router


function EditUser_PUT_64(){
    const id = useParams().id;
    
    useEffect(()=>{
        getUserData();
    },[])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(""); 

    const navigate = useNavigate();

    const getUserData = async ()=>{

        const url = "http://localhost:3000/users/"+id;

        let response = await fetch(url);
        response = await response.json();

        console.log(response);

        setName(response.name)
        setEmail(response.email)
        setAddress(response.address)

    }

    const upadteuser = async ()=>{
        const url = "http://localhost:3000/users/"+id;

        const data ={
            name : name,
            email : email,
            address : address
        }

        let response = await fetch(url,{
            method : "put",
            body : JSON.stringify(data)
        });

        if(response){
            alert("User updated successfully");
            navigate("/");
        }
    }
``
    return(
        <div style={{textAlign :"center"}}>
            <h1>User Edit Details</h1>

            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" /><br /><br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" /><br /><br />
            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address" /><br /><br />

            <button onClick={upadteuser}>Update User</button>
            
        </div>
    )
}

export default EditUser_PUT_64;