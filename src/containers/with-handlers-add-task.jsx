import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAddTask} from '../actions/actions';

const withHandlersAddTask = (Component) => {
  const WrappedComponent = (props) => {
    return <Component {...props} />;
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetchAddTask: fetchAddTask()
    }, dispatch);
  };

  return connect(null, mapDispatchToProps)(WrappedComponent);
};

export default withHandlersAddTask;
