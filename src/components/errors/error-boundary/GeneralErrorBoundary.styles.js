import styled from "styled-components";
import { Box } from "../../../assets/css/mixins";

export const ErrorContainer = styled.div`
  align-items: center;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Error = styled.div`
  ${Box}
  text-align: center;
`;
export const Header = styled.h1`
  color: #5f5f5f;
`;
export const Message = styled.p`
  color: #848484;
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 10px;
`;
