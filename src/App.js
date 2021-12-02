import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, InputGroup, FormControl, Button, ListGroup} from 'react-bootstrap';
import {List} from "react-bootstrap-icons";
import {useState, useEffect} from "react";
import ListElement from './Listelement';


function App() {
  
  let [currentValue, setCurrentValue] = useState();
  let [list, setList] = useState([]);
  

  function addToList(name, checked) {
    let date = new Date();
    let listTemp = [...list];
    listTemp.push({name, checked, date});
    setList(listTemp);

    localStorage.setItem("list", JSON.stringify(list))
  }

  useEffect(
  function loadList() {
    if(localStorage.getItem("list") != null) {
      setList(JSON.parse(localStorage.getItem("list")));
    }
  }
  , []
  )

  return (
    <div>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs={7} md={4}>
          <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1" onClick={ () => addToList(currentValue, false)}>
              +
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="item"
              onChange={ (v) => setCurrentValue(v.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={7} md={4}>
          <ListGroup>
            {list.map((listElement) => 
              <ListElement name={listElement.name} checked={ (v) => listElement.checked = v} date={listElement.date} />
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default App;
