import styled from "styled-components";

export const TaskContainer = styled.div`
  .row {
    align-items: center;
    margin-bottom: 10px;
  }
  .row > div:first-of-type {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.div`
  background-color: ${props => props.theme.main}
  border-radius: 100%;
  height: 30px;
  display: inline-block;
  margin-right: 15px;
  padding-top: 3px;
  text-align: center;
  width: 30px;

  img{ width: 15px; }
`;
