

import React from 'react';
import '../App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = props.onChange
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  };


  render() {
    return (
      <input className="input"
        type="text"
        value={this.state.value}
        onChange={(evt) => {
          this.handleChange(evt);
          this.onChange(evt.target.value);
        }}
        placeholder="Type a device to search"
        required
      />
    );
  }
}

export default Search
