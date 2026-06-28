import { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !genre.trim()) return; // Prevent empty entries
    
    onAddMovie(title, genre);
    setTitle(''); // Clear inputs
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input 
        type="text" 
        placeholder="Movie Title..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Genre..." 
        value={genre} 
        onChange={(e) => setGenre(e.target.value)} 
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;