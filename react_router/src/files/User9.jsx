
import {Link} from 'react-router-dom';

function User9() {

    const userData =[
        {id: 1, name: 'aby'},
        {id: 2, name: 'bby'},
        {id: 3, name: 'cby'},
        {id: 4, name: 'dby'},
        {id: 5, name: 'eby'}
    ]
    return (
        <div style={{ marginLeft :"20px" }}>
            <h1>User Page</h1>
            <p>Welcome to the User Page. Here you can find information about the users, their profiles, and activities.</p>
            
            <h2>User List</h2>
            {
                userData.map((item)=>(
                    <div>
                        <h4> <Link to={'/users/'+item.id}> {item.name}</Link></h4>
                    </div>
                ))
            }

        </div>
    )
}

export default User9;