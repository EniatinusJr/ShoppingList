import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import { } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import ListElement from './Listelement';


function App() {

  let [currentValue, setCurrentValue] = useState();
  let [list, setList] = useState([]);


  function addToList(name, checked) {
    let date = new Date(),
      day = date.getDate(),
      month = (date.getMonth() + 1),
      year = date.getFullYear();
    let item = { name, checked, timeStamp: Date.now(), date: [day, month, year].join("/") };
    let listTemp = [...list, item]
    setList(listTemp);
    localStorage.setItem("list", JSON.stringify(listTemp))
  }

  useEffect(
    function loadList() {
      if (localStorage.getItem("list") != null) {
        setList(JSON.parse(localStorage.getItem("list")));
      }
    }
    , []
  );

  function delItem(timeStamp) {
    console.log(timeStamp)
    let newList = JSON.parse(localStorage.getItem("list")).filter(item => item.timeStamp !== timeStamp)
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList))
  }

  return (
    <div>
      <br></br>
      <Row className="justify-content-md-center">
        <Col xs={7} md={4}>
          <InputGroup className="mb-3">
            <Button variant="outline-secondary" id="button-addon1" onClick={() => addToList(currentValue, false)}>
              +
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="item"
              onChange={(v) => setCurrentValue(v.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={7} md={4}>
          <ListGroup>
            {list.map((listElement) =>
              <ListElement 
                name={listElement.name} 
                onChange={(v) => {
                  listElement.checked = v;
                  //let listTemp = list.filter(li => li.timeStamp==listElement.timeStamp);
                  setList([...list]);
                  localStorage.setItem("list", JSON.stringify([...list]))
                }} 
                checked={listElement.checked} 
                date={listElement.date} 
                timestamp={listElement.timeStamp} 
                onClick={() => delItem(listElement.timeStamp)} />
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default App;
