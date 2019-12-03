import { createHttpAction } from "../../redux/actions/commonActions";
import types from "./TasksConstants";

export const fetchTasks = id =>
  createHttpAction({
    type: types.FETCH_TASKS,
    method: "GET",
    query: `{ 
      tasks(carId: "${id}") {
        id
        taskType
        comment
        completed
      }
    }`
  });

export const createTask = (carId, task) => {
  const query = `
    mutation CreateTask($carId: ID!, $task: TaskInput!) {
      createTask(carId: $carId, task: $task)
    }
  `;
  return createHttpAction({
    type: types.CREATE_TASK,
    payload: task,
    method: "POST",
    body: {
      query,
      variables: { carId, task }
    }
  });
};

export const updateTask = (id, completed) => {
  const query = `
    mutation UpdateTask($id: ID!, $completed: Boolean!) {
      updateTask(id: $id, completed: $completed){
        id
        taskType
        comment
        completed
      }
    }
  `;
  return createHttpAction({
    type: types.UPDATE_TASK,
    method: "POST",
    body: {
      query,
      variables: { id, completed }
    }
  });
};
