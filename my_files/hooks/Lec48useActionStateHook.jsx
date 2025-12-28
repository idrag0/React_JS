
import { useActionState } from "react"

function Lec48useActionStateHook() {

    const handlesubmit = async (prevData, formData) => {
        console.log("handle submit called");
        let name = formData.get("username")
        let pass = formData.get("password")

        await new Promise(res => setTimeout(res, 2000));

        if (name && pass) {
            return { message: "Data submitted successfully", name, pass }
        } else {
            return { error: "failed to submit data", name, pass }
        }

    }

    const [data, action, pending] = useActionState(handlesubmit);
    console.log(data);



    return (
        <div>
            <h1>useActionState Hook</h1>

            <form action={action}>
                <input type="text" placeholder="username" name="username" />
                <br /><br />
                <input type="text" placeholder="password" name="password" />
                <br /><br />
                <button type="submit" disabled={pending}> {pending ? "submitting" : "Submit"}</button>



            </form>

            {
                data?.error && <h3 style={{ color: "red" }}>{data.error}</h3>
            }
            {
                data?.message && <h3 style={{ color: "green" }}>{data.message}</h3>
            }

            <h3>User Name : {data?.name}</h3>
            <h3>Password : {data?.pass}</h3>

        </div>
    )
}

export default Lec48useActionStateHook;