

function Lec41useFormStatus() {

    const handleSubmit = async () => {
        await new Promise( res =>setTimeout(res,3000));
        console.log("Form Submitted");
    }

    return (
        <div>
            <h1>useFormStatus</h1>

            <form action={handleSubmit}>
                <input type="text" placeholder="Enter name" />
                <br /><br />
                <input type="text" placeholder="Enter Password" />
                <br /><br />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )

}
export default Lec41useFormStatus;