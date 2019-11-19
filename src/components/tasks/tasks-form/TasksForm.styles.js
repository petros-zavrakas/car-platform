import styled from "styled-components";
import { Form, animationFadeIn } from "../../../assets/css/mixins";

export const AddTaskForm = styled.form`
  animation: 0.6s ${animationFadeIn};
  ${Form}
`;
