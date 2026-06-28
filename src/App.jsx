import { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  // Initialize state with localStorage data if it exists, otherwise use default movies
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('MovieList');
    return savedMovies ? JSON.parse(savedMovies) : [
      { id: 1, title: "Inception", genre: "Sci-Fi", watched: false },
      { id: 2, title: "The Dark Knight", genre: "Action", watched: true }
    ];
  });

  // Filter state: 'all', 'unwatched', or 'watched'
  const [filter, setFilter] = useState('all');

  // Sync state to localStorage whenever the movies array changes
  useEffect(() => {
    localStorage.setItem('MovieList', JSON.stringify(movies));
  }, [movies]);

  // Handler to add a new movie
  const addMovie = (title, genre) => {
    const newMovie = {
      id: Date.now(), // Simple unique ID generator
      title,
      genre,
      watched: false
    };
    setMovies([...movies, newMovie]);
  };

  // Handler to toggle watched status
  const toggleWatched = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    ));
  };

  // Handler to delete a movie
  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="app-container">
      <h1> My Movie List</h1>
      
      <MovieForm onAddMovie={addMovie} />

      {/* Filter Controls */}
      <div className="filter-container">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'unwatched' ? 'active' : ''} onClick={() => setFilter('unwatched')}>To Watch</button>
        <button className={filter === 'watched' ? 'active' : ''} onClick={() => setFilter('watched')}>Watched</button>
      </div>

      <MovieList 
        movies={movies} 
        filter={filter}
        onToggleWatched={toggleWatched} 
        onDeleteMovie={deleteMovie} 
      />
    </div>
  );
}

export default App;