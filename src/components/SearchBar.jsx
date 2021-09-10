// implement SearchBar component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import FavoriteInput from './FavoriteInput';
import SelectGenre from './SelectGenre ';

export default class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <TextInput value={ searchText } onChange={ onSearchTextChange } />
        <FavoriteInput checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <SelectGenre value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;
