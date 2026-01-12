import { useContext } from "react"
import {SubjectContext} from "./Lec52Context_Data.jsx"


export default function Subject(){
    const subjectName = useContext(SubjectContext);
    return(
        <div style={{backgroundColor :"green", padding : 10}}>
            <h1>Subject is : {subjectName}</h1>
        </div>
    )
}