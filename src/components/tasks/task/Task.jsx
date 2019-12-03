import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useIcons } from "../../../hooks/useIcons";
import { TaskContainer, Icon } from "./Task.styles";

const Task = ({ task, onChange }) => {
  const icons = useIcons();

  return (
    <TaskContainer>
      <Row noGutters>
        <Col xs={6}>
          <Icon>
            <img src={icons[task.taskType]} alt="icon" />
          </Icon>
          {task.comment}
        </Col>
        <Col xs={6} className="text-right">
          <Form.Check
            type="switch"
            id={task.id}
            label=""
            checked={task.completed ? "checked" : ""}
            onChange={onChange}
          />
        </Col>
      </Row>
    </TaskContainer>
  );
};

export default Task;
