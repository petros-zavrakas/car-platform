import { keyframes } from "styled-components";
import arrow from "../images/arrow-down.svg";

export const Box = theme => `
  background-color: ${theme.box};
  border-radius: 3px;
  box-shadow: 0 0 6px -5px #565656;
  padding: 30px;
  transition: all .3s ease-in-out;

  .header{ margin-bottom: 20px; }
`;

export const Form = theme => `
  input, select, textarea { outline: none; }
  transition: all .3s ease-in-out;
  
  select, input { 
    color: ${theme.fonts}
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
    background-color: ${theme.box};
    color: ${theme.forms && theme.forms.label};
    display: table;
    font-size: .75rem;
    margin: 0 0 -10px 4px;
    padding: 0 5px;
    position: relative;
    transition: all .3s ease-in-out;
    z-index: 5;
  }

  .form-control{
    background-color: transparent!important;
    transition: all .3s ease-in-out;

    &::-webkit-input-placeholder {
      color: ${theme.fonts};
    }
    &:-ms-input-placeholder {
      color: ${theme.fonts};
    }
    &::placeholder {
      color: ${theme.fonts};
    }
  }

  .form-control:disabled, .form-control[readonly]{
    background-color: transparent;
    opacity: .5;
  }
  .form-control:focus {
    color: ${theme.fonts};
  }
}

  .form-group { margin-bottom: 10px; }
`;

export const animationFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
