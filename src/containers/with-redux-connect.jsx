import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTasks} from '../actions/actions';
import filterSelector from '../selectors/selectors';

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
  const {loading} = state;
  return {
    tasks: filterSelector(state),
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTasks: fetchTasks(),
  }, dispatch);
};

export default withReduxConnect;
