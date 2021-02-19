import React from 'react';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';
import withHandlers from '../../containers/with-handlers';
import withEditInput from '../../containers/with-edit-input';

const TaskItemWrapped = compose(
    withHandlers,
    withEditInput
)(TaskItem);

const TaskList = (props) => {
  const {tasks} = props;

  return (
    <ul>
      {
        tasks.map((task) => {
          return (
            <TaskItemWrapped key={task.id} taskData={task} />
          );
        })
      }
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
