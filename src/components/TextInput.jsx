import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="text-input"
          data-testid="text-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
