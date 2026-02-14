import { useReducer } from "react";

const emptyData ={
        name: '',
        password:'',
        email: '',
        city: '',
        address: ''
    }

    const reducer = (state, action) =>{
        return {...state, [action.type] : action.value}
    }

function UseReducerHook67(){
    const [state , dispatch] = useReducer(reducer, emptyData);
    console.log(state);

    return(
        <div>
            <h1>useReducer hook 67</h1>

            <input type="text" onChange={(event)=>dispatch({value:event.target.value,type:"name"})} placeholder="Enter name" />
            <br /><br />
            <input type="password" onChange={(event)=>dispatch({value:event.target.value,type:"password"})} placeholder="Enter password" />
            <br /><br />
            <input type="email" onChange={(event)=>dispatch({value:event.target.value,type:"email"})} placeholder="Enter Email"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({value:event.target.value,type:"city"})} placeholder="Enter City Name" />
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({value:event.target.value,type:"address"})}   placeholder="Enter Address" />
            <br /><br />
            <button>Add Details</button>


            <ul>
                <li>Name : {state.name}</li>
                <li>Password : {state.password}</li>
                <li>Email : {state.email}</li>
                <li>City : {state.city}</li>
                <li>Address : {state.address}</li>
            </ul>
        </div>
    )
}

export default UseReducerHook67;