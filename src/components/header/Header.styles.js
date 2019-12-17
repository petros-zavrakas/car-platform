import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.main}
  padding: 15px 0;
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
