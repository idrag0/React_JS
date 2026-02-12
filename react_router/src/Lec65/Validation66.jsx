import { useActionState } from "react"



export default function Validation66() {

    const handleLogin = (prevData, formData) => {
        let name = formData.get("name");
        let password = formData.get("password");
        let regex = /^[A-Z0-9]+$/i;

        if ( !name || name.length > 5) {
            return { error: "Please enter valid userName. only 5 characters are allowed",name, password };
        }
        else if (!password || !regex.test(password)) {
            return { error: "Please enter valid password. Password must contain at least 8 characters, including at least one letter and one number.", name, password };
        } else {
            return { success: "Login successful!" ,name, password};
        }


    }

    const [data, action, pending] = useActionState(handleLogin);

    console.log(data);



    return (
        <div>
            <h1>Input Validation</h1>

            {
                data?.success && <p style={{ color: "green" }}>{data.success}</p>
            }

            {
                data?.error && <p style={{ color: "red" }}>{data.error}</p>
            }

            <form action={action}>
                <input type="text" name='name' defaultValue={data?.name} placeholder="Enter your name" />
                <br /><br />
                <input type="password" name='password' defaultValue={data?.password} placeholder="Enter your password" />
                <br /><br />
                <button disabled={data?.error}>Login</button>
            </form>
        </div>
    )
}