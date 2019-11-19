import styled from "styled-components";
import { Breakpoints } from "../../assets/css/breakpoints";

export const VehicleContainer = styled.section`
  & > .row > div {
    margin-top: 30px;

    @media (${Breakpoints.medium}) {
      margin-top: 20px;
    }
    @media (${Breakpoints.small}) {
      margin-top: 15px;
    }
    @media (${Breakpoints.Xsmall}) {
      margin-top: 10px;
    }
  }
`;
