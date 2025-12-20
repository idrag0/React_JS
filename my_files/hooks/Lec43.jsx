

// let guest = 0;
function Lec43() {

    return(
        <div>
             <h1>keeping Components Pure</h1>
             <Cup guest={2}/>
                <Cup guest={4}/>
        </div>
    )
}


const Cup = ({guest})=>{
    let count = guest;
    return( <h2> We have {count} guest and we have to make {guest} cup of tea</h2>);
}


export default Lec43;