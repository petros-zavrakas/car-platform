import styled from "styled-components";
import { Breakpoints } from "../../../assets/css/breakpoints";

export const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 30px;
  width: 100%;

  @media (${Breakpoints.medium}) {
    padding: 0 20px;
  }
  @media (${Breakpoints.small}) {
    padding: 0 15px;
  }
  @media (${Breakpoints.Xsmall}) {
    padding: 0 10px;
  }
`;
