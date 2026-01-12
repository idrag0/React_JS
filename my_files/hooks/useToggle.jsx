import { useState } from "react";
// lec 53 Custom Hook in React JS

const useToggle = (defaultVal) =>{
    const [value, setValue] = useState(defaultVal);
    
    function toggleVal(val){
        if(typeof val != "boolean"){
            setValue(!value);
        }else{
            setValue(val);
        }
    }

    return [value, toggleVal];
}

export default useToggle;