import React from "react";
import Form from "react-bootstrap/Form";

const Input = ({ label, name, type, placeholder, ...rest }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} {...rest} />
    </Form.Group>
  );
};

export default Input;
