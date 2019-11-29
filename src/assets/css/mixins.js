import { keyframes } from "styled-components";
import arrow from "../images/arrow-down.svg";

export const Box = () => `
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 6px -5px #565656;
  padding: 30px;

  .header{ margin-bottom: 20px; }
`;

export const Form = () => `
  input, select, textarea { outline: none; }
  
  select, input { 
    font-size: .875rem;
    height: 45px; 
  }

  /* cross-browser styling including reset styles */
  select{
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background: none;
    background-image: url('${arrow}');
    background-position: right .75rem center;
    background-repeat: no-repeat;
    outline: none;
  }

  label { 
    background-color: #fff;
    color: #9e9e9e;
    display: table;
    font-size: .75rem;
    margin: 0 0 -10px 4px;
    padding: 0 5px;
    position: relative;
    z-index: 5;
  }

  .form-control:disabled, .form-control[readonly] {
    background-color: transparent;
    opacity: .5;
  }
}

  .form-group { margin-bottom: 10px; }
`;

export const animationFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
