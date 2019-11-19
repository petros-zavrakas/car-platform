import types from "./TasksConstants";

const tasks = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TASKS_SUCCESS:
      return action.payload.tasks;

    case types.CREATE_TASK_SUCCESS: {
      const newTask = {
        id: action.payload.createTask,
        ...action.originalPayload
      };

      return [...state, newTask];
    }

    case types.UPDATE_TASK_SUCCESS:
      return updateTask(state, action.payload.updateTask);

    default:
      return state;
  }
};

export default tasks;

const updateTask = (state, task) => {
  const tasks = [...state];
  const index = tasks.findIndex(x => x.id === task.id);
  tasks[index] = { ...task };
  return tasks;
};
