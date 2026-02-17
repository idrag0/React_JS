
function Son(props) {

    return (
        <div>
            <h2>This is Son Component</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

function Daughter(props) {


    return (
        <div>
            <h2>This is Daughter Component</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}





export default function Props_Children() {

    return (
        <div>
            <h1>This is Props Practise</h1>
            <Son>
                <p>
                    This was written in the Parent component,
                    but displayed as a part of the Son component
                </p>
            </Son>
            <Daughter>
                <p>
                    This was written in the Parent component,
                    but displayed as a part of the Daughter component
                </p>
            </Daughter>
        </div>
    )
}