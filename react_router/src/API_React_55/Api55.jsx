import { useEffect, useState } from "react";


function Api55(){
    const [response, setResponse] = useState([]);

    useEffect(()=>{
        getUserData();
    },[])

    async function getUserData(){
        const url = "http://localhost:3000/users";

        let data  = await fetch(url);
        data = await data.json();

        setResponse(data);
        console.log(response);

    }
    return(
        <div style={{marginLeft : '10px'}}>
            <h1>API 55</h1>

            {
                response.map((item)=>(
                    <div>
                        <h4>{item.name}</h4>
                    </div>
                ))
            }

        </div>
    )
}

export default Api55;