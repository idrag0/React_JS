
// function AboutJsx() {  // with JSX
//   const name = "Drago";
//   let age = 22;
//   let dob = "01-01-2010";
//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <p>Age is {age} and DOB is {dob}</p>
//       <button onClick={() => alert("name : " + name + "\n" + "age : " + age + "\n" + "dob : " + dob)}>
//         Show Info
//       </button>
//     </>
//   );
// }

function AboutJsx() {  // without JSX

  return createElement("div", { id: "rootDiv" }, "hello feiv");
}

export default AboutJsx;