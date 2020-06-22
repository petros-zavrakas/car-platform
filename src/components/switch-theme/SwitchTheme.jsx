import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "styled-components";

const SwitchTheme = ({ onSwitchTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <Button variant="outline-light" type="submit" onClick={onSwitchTheme}>
      Lights {theme.name === "light" ? "Off" : "On"}
    </Button>
  );
};

export default SwitchTheme;
