import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Search extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: ``
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleFilterClick = this._handleFilterClick.bind(this);
  }

  _handleChange(evt) {
    evt.preventDefault();
    this.props.setSearchKeyword(evt.target.value);
    this.setState({
      value: evt.target.value
    });
  }

  _handleFilterClick(evt) {
    evt.preventDefault();
    this.props.setFilter(evt.target.textContent);
  }

  render() {
    return (
      <div className="max-w-sm md:max-w-md mx-auto my-5 flex justify-between">
        <input
          value={this.state.value}
          onChange={this._handleChange}
          className="w-40 md:w-56 p-3 rounded-xl shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          type="text"
          placeholder="Search"
        ></input>

        <button
          onClick={this._handleFilterClick}
          className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >All</button>

        <button
          onClick={this._handleFilterClick}
          className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >Marked</button>

        <button
          onClick={this._handleFilterClick}
          className="p-3 rounded-xl shadow-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >Done</button>
      </div>
    );
  }
}

Search.propTypes = {
  setSearchKeyword: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};
