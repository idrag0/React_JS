import { useFormStatus } from "react-dom";

function Lec41useFormStatus() {

    const handleSubmit = async () => {
        await new Promise( res => setTimeout(res, 3000));
        console.log("Form Submitted");
    }

    function CustomForm(){
        const { pending, data, method } = useFormStatus();
        console.log("Pending status:", pending, data, method);
        return(
            <div>
                <input type="text" placeholder="Enter name" />
                <br /><br />
                <input type="text" placeholder="Enter Password" />
                <br /><br />
                <button type="submit" disabled={pending}>
                    {pending ? 'Submitting...' : 'submit'}
                </button>
            </div>
        )
    }

    return (
        <div>
            <h1>useFormStatus</h1>
            <form action={handleSubmit} method="post">
                <CustomForm />
            </form>
        </div>
    )

}
export default Lec41useFormStatus;