import styled from "styled-components";

export const Container = styled.div`
  font-size: 1rem;
  line-height: 1.3;

  small {
    color: ${props => props.theme.fontsLight};
    font-size: 0.6875rem;
  }
`;
