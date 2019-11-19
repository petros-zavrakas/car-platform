import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Page404 } from "./NotFound.styles";

const NotFound = () => {
  return (
    <Page404>
      <h1>404 - PAGE NOT FOUND</h1>
      <p>We are sorry but can't seem to find the page you're looking for.</p>
      <Button variant="primary">
        <Link to="/">Go to Homepage</Link>
      </Button>
    </Page404>
  );
};

export default NotFound;
