import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Edition() {
  // edistion state
  const [editionsList, setEdisionsList] = useState([]);
  const [edition, setedition] = useState("تفسير المیسر");

  // Get the edistions list with axios
  const getEditions = async () => {
    const response = await axios.get(`https://api.alquran.cloud/v1/edition`);
    setEdisionsList(response.data.data);
  };
  // Load All editions
  useEffect(() => {
    getEditions();
  }, []);
  return (
    <div className="editionList">
      {editionsList &&
        editionsList.map((ed) => (
          <Card style={{ width: "18rem", height: "20vh", margin: "20px 0" }} key={ed.identifier}>
            <Card.Body className="CardEdition">
              <Card.Title>{ed.name} </Card.Title>
              <Card.Text>{ed.identifier}</Card.Text>
            </Card.Body>
            <Link to={`/Surats/${ed.identifier}`}>
              <Button className="btnSurat" onClick={(e) => setedition(ed.name)}>
                Surats
              </Button>
            </Link>
          </Card>
        ))}
    </div>
  );
}

export default Edition;
