import React, { Component } from 'react';

export default class FavoriteInput extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="favorite" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="favorite"
          id="favorite"
          data-testid="checkbox-input"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}
