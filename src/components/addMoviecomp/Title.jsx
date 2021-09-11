import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="title"
          name="title"
          data-testid="title-input"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Title.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isReqired;
