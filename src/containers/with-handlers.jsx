import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreator, fetchDeleteTask, fetchPatchTask} from '../actions/actions';

const withHandlers = (Component) => {
  const WrappedComponent = (props) => {
    const {toggleMarkedFlag, toggleDoneFlag, editTask} = props;

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

    WrappedComponent.propTypes = {
      editTask: PropTypes.func.isRequired,
      toggleMarkedFlag: PropTypes.func.isRequired,
      toggleDoneFlag: PropTypes.func.isRequired,
    };

    return <Component {...props} onEditClick={handleEditClick} onMarkedClick={handleMarkedClick} onDoneClick={handleDoneClick} />;
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      toggleMarkedFlag: ActionCreator.toggleMarkedFlag,
      toggleDoneFlag: ActionCreator.toggleDoneFlag,
      editTask: ActionCreator.editTask,
      fetchDeleteTask: fetchDeleteTask(),
      fetchPatchTask: fetchPatchTask()
    }, dispatch);
  };

  return connect(null, mapDispatchToProps)(WrappedComponent);
};

export default withHandlers;
