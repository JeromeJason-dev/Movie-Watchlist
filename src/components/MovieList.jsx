import MovieItem from './MovieItem';

function MovieList({ movies, filter, onToggleWatched, onDeleteMovie }) {
  
  // Filter the movies array based on the current active filter
  const filteredMovies = movies.filter(movie => {
    if (filter === 'watched') return movie.watched;
    if (filter === 'unwatched') return !movie.watched;
    return true; // 'all'
  });

  // Conditional Rendering: Empty State vs List State
  if (filteredMovies.length === 0) {
    return <p className="empty-message">No movies found in this category!</p>;
  }

  return (
    <div className="MovieList">
      {filteredMovies.map(movie => (
        <MovieItem 
          key={movie.id} 
          movie={movie} 
          onToggleWatched={onToggleWatched} 
          onDeleteMovie={onDeleteMovie} 
        />
      ))}
    </div>
  );
}

export default MovieList;