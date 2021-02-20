import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class AddTask extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ``
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.fetchAddTask(this.state.value);
    this.setState({
      value: ``
    });
  }

  render() {
    return (
      <form
        onSubmit={this._handleSubmit}
        className="max-w-sm md:max-w-md mx-auto my-5 flex"
      >
        <input
          value={this.state.value}
          onChange={this._handleChange}
          className="w-3/4 md:w-3/4 p-3 mr-3 rounded-xl shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="text"
          placeholder="New task..."></input>
        <button type="submit" className="w-1/4 md:w-1/4 p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Add task</button>
      </form>
    );
  }
}

AddTask.propTypes = {
  fetchAddTask: PropTypes.func.isRequired,
};
