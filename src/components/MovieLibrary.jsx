// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      SearchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre, movies }
    return (
      <>
        <AddMovie />
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={  onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array,
}.isRequired;
