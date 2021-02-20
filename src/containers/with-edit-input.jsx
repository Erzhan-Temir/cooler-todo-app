import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const witchEditInput = (Component) => {
  class WrappedComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        value: props.taskData.text,
      };

      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(event) {
      this.setState({value: event.target.value});
    }

    render() {
      const {taskData, taskData: {isEditing}, fetchPatchTask} = this.props;

      if (isEditing) {
        return (
          <li className="p-6 max-w-sm md:max-w-md mx-auto my-5 bg-white rounded-xl shadow-md flex justify-between items-center space-x-4 bg-purple-300">
            <form
              className="flex align-center"
              onSubmit={(evt) => {
                evt.preventDefault();
                fetchPatchTask(Object.assign({}, taskData, {
                  text: this.state.value
                }));
              }}
            >
              <input
                className="w-80 p-3 mr-3 rounded-xl shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                value={this.state.value}
                onChange={this._handleChange}
              ></input>
              <button
                type="submit"
                className="px-3"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </li>
        );
      }

      WrappedComponent.propTypes = {
        taskData: PropTypes.shape({
          id: PropTypes.string.isRequired,
          isEditing: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired,
        }),
        fetchPatchTask: PropTypes.func.isRequired,
      };

      return <Component {...this.props} />;
    }
  }

  return WrappedComponent;
};

export default witchEditInput;
