let name =[];
const fakeapi = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    

    data.map((item)=>{
        name.push(item.firstname);
        name.push(item.lastname);
    })


    return name;

}

export default fakeapi;
