import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.main};
  padding: 15px 0;
  transition: all 0.3s ease-in-out;

  .wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.h2`
  color: #fff;
  font-size: 700;
  font-size: 1.5rem;
  margin: 0;
  text-transform: uppercase;

  span {
    color: #000;
    font-size: 1.125rem;
  }
`;
