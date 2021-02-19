import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTasks} from '../reducer/reducer';

const withReduxConnect = (Component) => {
  const WrappedComponent = (props) => {
    return (
      <ul>
        <Component {...props} />
      </ul>
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

const mapStateToProps = (state) => {
  const {tasks, loading} = state;
  return {
    tasks,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTasks: fetchTasks(),
  }, dispatch);
};

export default withReduxConnect;
