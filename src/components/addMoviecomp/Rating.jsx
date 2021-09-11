import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          name="rating"
          data-testid="rating-input"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
}.isReqired;
