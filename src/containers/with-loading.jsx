import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withLoading = (Component) => {
  class WrappedComponent extends PureComponent {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchTasks();
    }

    render() {
      if (this.props.loading) {
        return (
          <p className="p-6 text-center">Loading...</p>
        );
      }

      return (
        <Component {...this.props} />
      );
    }
  }

  WrappedComponent.propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  return WrappedComponent;
};


export default withLoading;
