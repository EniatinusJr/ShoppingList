import {useState} from "react";

export default function Rating(defautlRating) {
    let [value, setValue] = useState(1);

    function plus() {
        setValue(value+1);
    }

    function minus() {
        setValue(value-1);
    }

    return(
        <> 
            <button onClick={plus}>+</button>
                <p>{value}</p>
            <button onClick={minus}>-</button>
        </>
    )
}