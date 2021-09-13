import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoriteInput extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="favorite" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          id="favorite"
          data-testid="checkbox-input"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FavoriteInput.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}.isRequired;
