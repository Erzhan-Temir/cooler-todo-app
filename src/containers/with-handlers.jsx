import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreator} from '../reducer/reducer';

const withHandlers = (Component) => {
  const WrappedComponent = (props) => {
    const {toggleMarkedFlag, toggleDoneFlag, deleteTask, editTask} = props;

    const handleEditClick = (evt, id) => {
      evt.preventDefault();
      editTask(id);
    };

    const handleMarkedClick = (evt, id) => {
      evt.preventDefault();
      toggleMarkedFlag(id);
    };

    const handleDoneClick = (evt, id) => {
      evt.preventDefault();
      toggleDoneFlag(id);
    };

    const handleDeleteClick = (evt, id) => {
      evt.preventDefault();
      deleteTask(id);
    };

    WrappedComponent.propTypes = {
      editTask: PropTypes.func.isRequired,
      toggleMarkedFlag: PropTypes.func.isRequired,
      toggleDoneFlag: PropTypes.func.isRequired,
      deleteTask: PropTypes.func.isRequired,
    };

    return <Component {...props} onEditClick={handleEditClick} onMarkedClick={handleMarkedClick} onDoneClick={handleDoneClick} onDeleteClick={handleDeleteClick} />;
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      toggleMarkedFlag: ActionCreator.toggleMarkedFlag,
      toggleDoneFlag: ActionCreator.toggleDoneFlag,
      deleteTask: ActionCreator.deleteTask,
      editTask: ActionCreator.editTask,
      editTaskSave: ActionCreator.editTaskSave
    }, dispatch);
  };

  return connect(null, mapDispatchToProps)(WrappedComponent);
};

export default withHandlers;
