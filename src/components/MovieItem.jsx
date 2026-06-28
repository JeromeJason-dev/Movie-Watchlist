function MovieItem({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <div className={`movie-item ${movie.watched ? 'watched-card' : ''}`}>
      <div>
        <h3 style={{ textDecoration: movie.watched ? 'line-through' : 'none' }}>
          {movie.title}
        </h3>
        <span className="genre-tag">{movie.genre}</span>
      </div>
      
      <div className="action-buttons">
        <button 
          className="toggle-btn" 
          onClick={() => onToggleWatched(movie.id)}
        >
          {movie.watched ? ' Undo' : ' Watch'}
        </button>
        <button 
          className="delete-btn" 
          onClick={() => onDeleteMovie(movie.id)}
        >
           Delete
        </button>
      </div>
    </div>
  );
}

export default MovieItem;