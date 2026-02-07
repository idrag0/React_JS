import { useParams,Link } from "react-router-dom";


function UserDetails9(){

    const data = useParams();
    console.log(data);

    return(
        <div style={{marginLeft:"30px"}}>
            <h1>User Details Page</h1>
            <h3>ID: {data.id}</h3>

            <h2><Link to="/users">Back to Users List</Link></h2>
        </div>
    )
}

export default UserDetails9;