import { useState } from "react";
import {TrashFill} from "react-bootstrap-icons";
import { ListGroup } from "react-bootstrap";


export default function Listelement(props) {
    let [state, setState] = useState(false);


    return (
        <>
            <ListGroup.Item><input type="checkbox" checked={state} onChange={(e) => {setState(e.target.checked); props.checked(state)}}/> {props.name} {props.date}</ListGroup.Item>
        </>
    );
}