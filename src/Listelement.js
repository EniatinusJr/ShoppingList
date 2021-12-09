import { useState } from "react";
import { TrashFill } from "react-bootstrap-icons";
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";


export default function Listelement(props) {
    let [checked, setChecked] = useState(props.checked);


    return (
        <>
            <ListGroup.Item>
                <InputGroup className="mb-3">
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" checked={checked} onChange={(e) => { setChecked(e.target.checked); props.onChange(e.target.checked) }}/>
                    <FormControl aria-label="Text input with checkbox" value={props.name + " " + props.date} disabled />
                    <Button variant="outline-secondary" id="button-addon2" onClick={(e) => props.onClick()}>
                        <TrashFill />
                    </Button>
                </InputGroup>
            </ListGroup.Item>
        </>
    );
}