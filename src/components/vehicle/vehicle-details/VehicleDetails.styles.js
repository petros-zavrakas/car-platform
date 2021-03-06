import styled from "styled-components";
import { Box } from "../../../assets/css/mixins";

export const VehicleContainer = styled.div`
  ${props => Box(props.theme)}
`;
export const Header = styled.h4`
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
`;
