
function UserCompo({user}){
    return(
        
        <div style={
            {
                border : "1px solid green",
                padding : "10px",
                margin : "10px",
                width : "400px",
                borderRadius :"10px"
            }
        }>
            <h3>Name : <span style={{ color: "green" }}>{user.name}</span></h3>
            <h3 style={{ color: "blue" }}>Age : {user.age} </h3>
            <h3>Email : {user.email}</h3>
        </div>
    )
}

export default UserCompo;