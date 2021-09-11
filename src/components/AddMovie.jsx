// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './addMoviecomp/Title';
import Subtitle from './addMoviecomp/Subtitle';
import ImagePath from './addMoviecomp/ImagePath';
import Rating from './addMoviecomp/Rating';
import Genre from './addMoviecomp/Genre';
import Storyline from './addMoviecomp/Storyline';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form onSubmit={ this.handleSubmit } data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <Rating value={ rating } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />

        <button type="submit" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
