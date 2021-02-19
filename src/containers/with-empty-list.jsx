import React from 'react';
import PropTypes from 'prop-types';

const withEmptyList = (Component) => {
  const WrappedComponent = (props) => {
    if (props.tasks.length === 0) {
      return (
        <p className="p-6 text-center">Empty task list...</p>
      );
    }

    return (
      <Component {...props} />
    );
  };

  WrappedComponent.propTypes = {
    tasks: PropTypes.array.isRequired,
  };

  return WrappedComponent;
};


export default withEmptyList;
