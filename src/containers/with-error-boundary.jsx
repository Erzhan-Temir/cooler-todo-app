import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreator} from '../actions/actions';

const withErrorBoundary = (Component) => {
  class WrappedComponent extends PureComponent {
    constructor(props) {
      super(props);
    }


    componentDidCatch() {
      this.props.catchError();
    }

    render() {

      if (this.props.hasError) {
        return (
          <p className="p-6 text-center text-xl">We are sorry, but something went really wrong...</p>
        );
      }

      return <Component />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      hasError: state.hasError
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      catchError: ActionCreator.catchError
    }, dispatch);
  };

  WrappedComponent.propTypes = {
    hasError: PropTypes.bool.isRequired,
    catchError: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

export default withErrorBoundary;
