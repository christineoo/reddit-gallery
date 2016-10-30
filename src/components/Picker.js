import React, { Component, PropTypes } from 'react'
import Dropdown from 'react-toolbox/lib/dropdown';

export default class Picker extends Component {

  handleChange = (value) => {
    this.props.onChange(value)
  };

  render() {
    const { value, onChange, options } = this.props

    return (
      <Dropdown
        label="Select a category"
        auto
        onChange={this.handleChange}
        source={options}
        value={value}
      />)
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
