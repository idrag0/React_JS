import { useState } from "react"

function Lec46Updating_obj() {
     
    const [data,setData] = useState({
        name : "aby",
        address : "G.noida",
        country : "India"
    });

    function handleName(val){
        // let tempData;
        // tempData =  val;
        // setData({...data, name : tempData});

        let newTempboj = data;
        newTempboj.name = val;

        setData({...newTempboj});

        
    }

    function handleCity(val){

        data.address = val;
        setData({...data});
    }

    function handleCnty(val){
        data.country = val;
        setData({...data})
    }

    return(
        <div>
            <h1>Updating Object</h1>
            
            <input type="text" onChange={(event) => handleName(event.target.value)}  placeholder="Enter Name" />  <br /><br />
            <input type="text" onChange={(e) => handleCity(e.target.value)} placeholder="Enter City" />
            <br />
            <br />

            <input type="text" onChange={ (e) => handleCnty(e.target.value)} placeholder="Enter Your Country Name" />
            
            <h2>Details</h2>
            <h3>Name : {data.name}</h3>
            <h3>Address : {data.address}</h3>
            <h3>Country : {data.country}</h3>
        </div>
    )
}

export default Lec46Updating_obj;