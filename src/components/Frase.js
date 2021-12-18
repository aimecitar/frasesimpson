import React from "react";
import { Card } from "react-bootstrap";

const Frase = () => {
  return (
    <Card>
      <Card.Body>
        <div className="row">
          <div className="col-12 col-md-4">
            <img src="" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;
