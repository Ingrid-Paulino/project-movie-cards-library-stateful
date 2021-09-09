// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="add-txt" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="add-txt"
            id="add-txt"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label htmlFor="favorit" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="favorit"
            id="favorit"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {

};
export default SearchBar;