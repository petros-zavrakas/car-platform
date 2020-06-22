import styled from "styled-components";
import { Box, Form } from "../../../assets/css/mixins";

export const AddInfoForm = styled.form`
  ${props => Box(props.theme)}
  ${props => Form(props.theme)}
`;

export const Header = styled.h4`
  margin-bottom: 25px;
`;
