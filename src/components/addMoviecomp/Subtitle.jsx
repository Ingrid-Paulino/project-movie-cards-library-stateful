import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isReqired;
