import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
    </div>
  );
}

export default App;
