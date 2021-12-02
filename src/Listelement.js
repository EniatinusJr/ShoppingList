import { useState } from "react";


export default function Listelement(props) {
    let [state, setState] = useState(false);


    return (
        <>
            <ListGroup.Item><input type="checkbox" checked={state} onChange={() => {setState(e.target.checked); props.checked(state)}}/> {props.name} {props.date}</ListGroup.Item>
        </>
    );
}