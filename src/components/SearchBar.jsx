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
        <h3>Adicionado tag de form</h3>
      </form>
    );
  }
}

SearchBar.propTypes = {

};
export default SearchBar;