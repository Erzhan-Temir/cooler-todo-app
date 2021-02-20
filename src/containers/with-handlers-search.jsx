import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreator} from '../actions/actions';

const withHandlerSearch = (Component) => {
  const WrappedComponent = (props) => {
    return <Component {...props} />;
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      setSearchKeyword: ActionCreator.setSearchKeyword,
      setFilter: ActionCreator.setFilter
    }, dispatch);
  };

  return connect(null, mapDispatchToProps)(WrappedComponent);
};

export default withHandlerSearch;
