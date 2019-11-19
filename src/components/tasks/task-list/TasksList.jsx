import React from "react";
import Task from "../task/Task";
import { TasksContainer } from "./TasksList.styles";

const TasksList = ({ tasks, onChange }) => {
  return (
    <TasksContainer>
      <h4 className="header">Tasks List</h4>
      {tasks.length ? (
        tasks.map(task => (
          <Task key={task.id} task={task} onChange={onChange} />
        ))
      ) : (
        <p>
          <b>There are no tasks for this vehicle.</b>
          <br />
          Go ahead and add one by clicking the plus button below!
        </p>
      )}
    </TasksContainer>
  );
};

export default TasksList;
