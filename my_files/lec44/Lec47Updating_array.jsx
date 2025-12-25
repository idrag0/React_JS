import { useState } from "react";


function Lec47Updating_array(){

    const [arr, setArr] = useState(["aby", "daby", "caby"]);

    const [data, setData] = useState([
        {name: "aby", age: 24},
        {name: "daby", age: 25},
        {name: "caby", age: 26}
    ]);
    
    function handleName(val){
        let newArr = arr;
        newArr[newArr.length-1] = val;
        setArr([...newArr]);
    }

    const handleobjName = (val) =>{
        data[data.length - 1].name = val;
        setData([...data]);
    }

    const handleAge = (val) =>{
        let element = data[data.length-1];
        element.age = val;
        setData([...data]);
    }

    return(
        <div>
            <h1>Updating Array in State</h1>

            <input type="text" onChange={(e) => handleName(e.target.value)} placeholder="Enter Name"/> <br /><br />
            

            {
                arr.map((item, idx) =>(
                    <h3 key={idx}>{item}</h3>
                ))
            }

            <hr />
            <h3>Details of person</h3>

            <input type="text" onChange={(e) => handleobjName(e.target.value)} placeholder="Enter Name"/> <br /><br />
            <input type="number" onChange={(e) => handleAge(e.target.value)} placeholder="Enter Age"/> <br /><br />


            {
                data.map((person, idx)=>
                    <h4 key={idx}>Name: {person.name} | Age: {person.age}</h4>)
            }

        </div>
    )

}

export default Lec47Updating_array;