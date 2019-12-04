import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTasks, updateTask, createTask } from "./TasksActions";
import { selectTasks } from "./TasksSelectors";
import { TasksContainer } from "./Tasks.styles";
import TasksList from "./task-list/TasksList";
import TasksForm from "./tasks-form/TasksForm";
import Button from "react-bootstrap/Button";
import { useToggleView } from "../../common/hooks/useToggleView";

const Tasks = props => {
  const { vehicleId, tasks, onFetchTasks, onUpdateTask, onCreateTask } = props;

  const [elementsView, toggleElementsView] = useToggleView({
    list: true,
    form: false
  });

  useEffect(() => {
    onFetchTasks(vehicleId);
  }, [onFetchTasks, vehicleId]);

  const handleUpdateTask = ({ currentTarget: input }) => {
    onUpdateTask(input.id, input.checked);
  };

  const handleAddTask = task => {
    onCreateTask(vehicleId, task);
    toggleElementsView();
  };

  return (
    <TasksContainer>
      {elementsView.list && (
        <TasksList tasks={tasks} onChange={handleUpdateTask} />
      )}
      {elementsView.form && <TasksForm onSubmit={handleAddTask} />}
      <Button
        variant="primary"
        type="submit"
        className="mt-1 btn-cyrcle"
        onClick={toggleElementsView}
      >
        +
      </Button>
    </TasksContainer>
  );
};

const mapStateToProps = state => ({
  tasks: selectTasks(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onFetchTasks: vehicleId => {
      dispatch(fetchTasks(vehicleId));
    },
    onUpdateTask: (taskId, completed) => {
      dispatch(updateTask(taskId, completed));
    },
    onCreateTask: (vehicleId, task) => {
      dispatch(createTask(vehicleId, task));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
