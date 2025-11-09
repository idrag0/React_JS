
function StatesINReat(){
    const [fruit, setFruit] = useState("mango");

    const handleChange = () =>{
        setFruit("banana");
        // console.log(fruit);
    }
    return(
        <div>
            <h1>States in React Js</h1>
            <h2>{fruit}</h2>
            <button onClick={handleChange}>Change Fruit</button>
            <Counter />
        </div>
    );
}

export default StatesINReat;