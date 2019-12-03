import React from "react";
import Form from "react-bootstrap/Form";
import { arrayToSelectOptions } from "../../utils/utils";

const Select = ({ label, name, optionsList, ...rest }) => {
  const options = arrayToSelectOptions(optionsList);

  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" {...rest}>
        <option>Select {label}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
