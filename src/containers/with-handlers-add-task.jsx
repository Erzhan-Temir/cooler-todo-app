import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreator} from '../reducer/reducer';

const withHandlersAddTask = (Component) => {
  const WrappedComponent = (props) => {
    return <Component {...props} />;
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addTask: ActionCreator.addTask,
    }, dispatch);
  };

  WrappedComponent.propTypes = {
    addTask: PropTypes.func.isRequired,
  };

  return connect(null, mapDispatchToProps)(WrappedComponent);
};

export default withHandlersAddTask;
