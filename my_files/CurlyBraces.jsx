
function CurlyBraces() {
    const name = "aby";
    let x = 5;
    let y = 10;
    function sum(){
        return x + y;
    }

    return(
        <>
             <div>
                <h1>Jsx with Curly Brackets</h1>
                <h2>{name}</h2>
                <h2>{x + y}</h2>
                <h2>{x * y}</h2>
                <h2>{x / y}</h2>
                <h2>{x - y}</h2>
                <h2>{sum()}</h2>
             </div>
        </>
    )
}
export default CurlyBraces;