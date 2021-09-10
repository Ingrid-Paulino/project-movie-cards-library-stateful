import React, { Component } from 'react';

export default class TextInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="text-input"
          id="text-input"
          data-testid="text-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}
