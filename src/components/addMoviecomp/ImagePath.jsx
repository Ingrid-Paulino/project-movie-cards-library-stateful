import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          data-testid="image-input"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}.isReqired;
