import styled, { createGlobalStyle } from "styled-components";
import { Breakpoints } from "./assets/css/breakpoints";

// Global Styles
export const GlobalStyles = createGlobalStyle`
  html body{
    color: ${props => props.theme.fonts};
    background-color: ${props => props.theme.background};
    font-family: "Poppins", Sans-serif;
    font-size: .875rem;
    font-weight: 300;

    a, a:hover{ text-decoration: none!important; }

    h1, h2, h3, h4{
      margin: 0;
    }
    h1{ font-size: 1.75rem; }
    h2{ font-size: 1.5rem; }
    h3{ font-size: 1.25rem; }
    h4{ font-size: 1rem; }
    
    ul{
      margin: 0;
      padding: 0;
      li{ list-style: none; }
    }
    img{ width: 100%; }
  }

  .btn{
    &:hover{ box-shadow: 0 0 8px -2px #000; }
    &.btn-primary{
      background-color: ${props => props.theme.main}
      border-color: ${props => props.theme.main}
  
      &:hover{
        background-color: ${props => props.theme.main}
        border-color: ${props => props.theme.main}
      }
  
      a{ color: #fff; }
    }
    &.btn-cyrcle{ 
      align-items: center;
      border-radius: 100%; 
      height: 40px;
      display: flex;
      justify-content: center;
      width: 40px;
    }
  }

  .list-group .list-group-item{
    background-color: ${props => props.theme.box};
    border: 1px solid ${props => props.theme.borders};
  }
`;

export const Main = styled.main`
  padding: 30px 0;
  @media (${Breakpoints.medium}) {
    padding: 20px 0;
  }
  @media (${Breakpoints.small}) {
    padding: 15px 0;
  }
  @media (${Breakpoints.Xsmall}) {
    padding: 10px 0;
  }
`;
