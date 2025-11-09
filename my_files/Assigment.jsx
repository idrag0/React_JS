import imgSrc from "./imf/pexels-chevanon-1108099.jpg";

function Assigment() {
	function callFun(name) {
		alert(name);
	}
	const fruit = (name)=>{
		alert(name);
	}

	return (
		<>
			<h1>Anil Sidhu Todos</h1>
			<img
				src={imgSrc}
				alt="anil sidhu"
				className="photo"
				width={200}
				height={200}
			/>

			<ul>
				<li>Invent new traffic lights</li>
				<li>Rehearse a movie scene</li>
				<li>Improve the spectrum technology</li>
			</ul>

			<button onClick={() => callFun("Apple")}>Apple</button>
			<button onClick={() => callFun("Cherry")}>Cherry</button>
			<button onClick={() => fruit("Banana")}>Banana</button>

		</>
	)
}

export default Assigment;