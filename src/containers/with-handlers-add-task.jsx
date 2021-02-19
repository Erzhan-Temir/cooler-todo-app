import React from 'react';
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

  return connect(null, mapDispatchToProps)(WrappedComponent);
};

export default withHandlersAddTask;
