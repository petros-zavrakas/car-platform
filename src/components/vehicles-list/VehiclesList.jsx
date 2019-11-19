import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const VehiclesList = () => {
  return (
    <div data-test="vehiclesListComponent">
      <h1 data-test="header">List of cars</h1>
      <p>Suppose we had a page where cars was listed</p>

      <ListGroup data-test="list">
        <ListGroup.Item>
          <Link to="/car/fd6b3de0-2abc-4377-98bd-1e945d464027">
            Audi A4 2008
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/car/fd6b3de0-2abc-4377-98bd-1e945d464027">
            Ford Escape Automatic 2004
          </Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/car/fd6b3de0-2abc-4377-98bd-1e945d464027">
            Mercedes Vito 2016
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default VehiclesList;
