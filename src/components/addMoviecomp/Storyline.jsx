import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Storyline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isReqired;
