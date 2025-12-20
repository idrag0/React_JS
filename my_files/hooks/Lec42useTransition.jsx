import { startTransition, use, useState, useTransition } from "react"


function Lec42useTransition() {
    // const [pending, setPending] = useState(false);
    const [pending, startTransition] = useTransition();

    const handleButton = async () => {
        // setPending(true);
        // await new Promise( res => setTimeout(res, 8000));
        // setPending(false);

        startTransition( async () => {
            await new Promise( res => setTimeout(res, 8000));   
        });
    }

    return(
        <div>
            <h1>useTransition</h1>
            {
                pending ? <img style={{ width: "300px" }} src="https://cdn.dribbble.com/userupload/22076800/file/original-8e7ce77dec0edaf0105e8287038f6e60.gif" alt="" />
                : null
            }
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}

export default Lec42useTransition;