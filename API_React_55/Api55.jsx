import { useEffect, useState } from "react";


function Api55(){
    const [response, setResponse] = useState([]);

    useEffect(()=>{
        getUserData();
    },[])

    async function getUserData(){
        const url = "https://jsonplaceholder.typicode.com/users";

        let data  = await fetch(url);
        data = await data.json();

        setResponse(data);
        console.log(data);

    }
    return(
        <div>
            <h1>API 55</h1>

            <p>{JSON.stringify(response)}</p>

        </div>
    )
}

export default Api55;