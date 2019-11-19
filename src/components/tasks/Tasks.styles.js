import styled from "styled-components";
import { Box } from "../../assets/css/mixins";

export const TasksContainer = styled.div`
  ${Box}
  height: 100%;
  padding-bottom: 85px;
  position: relative;

  .btn-cyrcle {
    bottom: 30px;
    position: absolute;
    right: 30px;
  }
`;
