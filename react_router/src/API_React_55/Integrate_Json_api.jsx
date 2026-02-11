import { useEffect } from "react";
import { useState } from "react";
import './Api.css';

// API Integration in React lecture 58

function Integrate_Json_api(){

    const [loding, setLoading] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        setLoading(true);
        getUserData();
    },[])

    const getUserData =async ()=>{
        const url = "http://localhost:3000/users";

        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUsers(response);
        setLoading(false);


    }

    return(
        <div>
            <h1>Integrate JSON API</h1>

            {
                !loding ? 
                users.map((item)=>(
                    <ul className="list" key={item.id}>
                        <li>Name : {item.name}</li>
                        <li>Email : {item.email}</li>
                        <li>Street : {item.address}</li>
                    </ul>
                ))
                : <h1>Loading...</h1>
            }

        </div>
    )
}

export default Integrate_Json_api;