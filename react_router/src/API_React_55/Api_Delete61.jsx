import { useEffect } from "react";
import { useState } from "react";
import './Api.css';
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import AddUser59 from "./AddUser59";
import EditUser62 from "./EditUser_PUT_62";

function Api_Delete61() {

    return(
        <div>
            <ul className="navBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/adduser">Add User</Link></li>

            </ul>


            <Routes>
                <Route index path="/" element={<HomeList />} />
                <Route path="/adduser" element={<AddUser59 />} />
                <Route path="/edituser/:id" element={<EditUser62/>} />

            </Routes>


        </div>
    )

}

function HomeList() {

    const [loding, setLoading] = useState(false);

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])

    const getUserData = async () => {
        const url = "http://localhost:3000/users";

        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUsers(response);
        setLoading(false);
    }

    const deleteData = async (id)=>{
        console.log(id);
        const url = "http://localhost:3000/users";

        let response = await fetch(url+"/"+id,{
            method : "delete"
        })

        response = await response.json();

        if(response){
            alert("user deleted successfully");
            getUserData();
        }
    }

    const editUser = (id)=>{
        navigate("/edituser/"+id);
    }

    return (
        <div>
            <div>
                <ul className="list">
                    <li>Name</li>
                    <li>Email</li>
                    <li>Street</li>
                    <li>Action</li>
                </ul>
            </div>
            <div>
                {
                    !loding ?
                        users.map((item) => (
                            <ul className="list" key={item.id}>
                                <li>{item.name}</li>
                                <li>{item.email}</li>
                                <li>{item.address}</li>
                                <li>
                                    <button onClick={()=>deleteData(item.id)}>Delete</button>
                                    <button onClick={()=>editUser(item.id)}>Edit</button>
                                
                                </li>
                            </ul>
                        ))
                        : <h1>Loading...</h1>
                }

            </div>

        </div>
    )
}

export default Api_Delete61;