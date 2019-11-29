import React, { useState } from "react";
import { useForm } from "../../../common/hooks/useForm";
import Input from "../../../common/components/form/Input";
import Select from "../../../common/components/form/Select";
import AlertBox from "../../../common/components/alert-box/AlertBox";
import Button from "react-bootstrap/Button";
import { AddTaskForm } from "./TasksForm.styles";

const TasksForm = props => {
  const taskTypeOptions = ["ADD_DOCUMENT", "WASH_CAR", "ADD_PAYMENT_DETAILS"];

  const [handleChange, fields] = useForm({
    taskType: "",
    comment: ""
  });
  const [error, setError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();

    if (fields.taskType === "" || fields.comment === "")
      setError("Please fill both fields");
    else {
      props.onSubmit(fields);
      setError(null);
    }
  };

  return (
    <AddTaskForm onSubmit={handleSubmit}>
      <h4 className="header">Add New Task</h4>

      {error && <AlertBox variant="danger">{error}</AlertBox>}

      <Select
        label="Task Type"
        name="taskType"
        optionsList={taskTypeOptions}
        onChange={handleChange}
        value={fields.taskType}
      />
      <Input
        label="Task Name"
        name="comment"
        placeholder="Give a name to your task"
        value={fields.comment}
        onChange={handleChange}
      />
      <Button variant="primary" type="submit" className="mt-1">
        Create Task
      </Button>
    </AddTaskForm>
  );
};

export default TasksForm;
