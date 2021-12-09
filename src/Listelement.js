import { useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";


export default function Listelement(props) {
    let [state, setState] = useState(false);


    return (
        <>
            <ListGroup.Item>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={state} onChange={(e) => { setState(e.target.checked); props.checked(state) }}/>
                    <FormControl aria-label="Text input with checkbox" value={props.name + " " + props.date} disabled />
                    <Button variant="outline-secondary" id="button-addon2">
                        <TrashFill />
                    </Button>
                </InputGroup>
            </ListGroup.Item>
        </>
    );
}