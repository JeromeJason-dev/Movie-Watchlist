# My Movie List

A simple React app for tracking movies you want to watch and ones you've already seen. Add movies by title and genre, mark them as watched, filter your list, and pick up right where you left off — your data persists across sessions via `localStorage`.

---

## Features

- **Add movies** with a title and genre
- **Mark as watched / undo** watched status
- **Delete** movies from the list
- **Filter** by All, To Watch, or Watched
- **Persistent storage** — list survives page refreshes via `localStorage`

---

## Project Structure

```
src/
├── components/
│   ├── MovieForm.jsx     # Input form for adding new movies
│   ├── MovieList.jsx     # Renders the filtered list of movies
│   └── MovieItem.jsx     # Individual movie card with actions
├── App.jsx               # Root component — state management & handlers
├── App.css               # App-level styles
├── index.css             # Global styles
└── main.jsx              # Entry point
```

---

## Getting Started

### Prerequisites

- npm or yarn

### Installation

```bash
git clone https://github.com/JeromeJason-dev/Movie-Watchlist.git
cd movie-watchlist

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default).

---

## Usage

1. **Add a movie** — type a title and genre into the form and click **Add Movie**.
2. **Mark as watched** — click the **Watch** button on any movie card. Click **Undo** to revert.
3. **Delete a movie** — click **Delete** to remove it from the list.
4. **Filter the list** — use the **All / To Watch / Watched** buttons to switch views.

---

## How It Works

### State Management

All movie data lives in `App.jsx` as a single `movies` array. Each movie object has this shape:

```js
{
  id: 1718000000000,   // Date.now() timestamp
  title: "Inception",
  genre: "Sci-Fi",
  watched: false
}
```

State is initialized from `localStorage` on first load, and synced back via a `useEffect` whenever the array changes.

### Component Responsibilities

| Component | Responsibility |
|-----------|---------------|
| `App.jsx` | Holds state; defines `addMovie`, `toggleWatched`, `deleteMovie` handlers |
| `MovieForm` | Controlled inputs; calls `onAddMovie` on submit; clears itself after |
| `MovieList` | Applies the active filter; renders `MovieItem` for each result |
| `MovieItem` | Displays title, genre, watched state; triggers toggle/delete callbacks |

---

## Built With

- React — UI library
- Vite — build tool & dev server
- `localStorage` — client-side persistence (no backend required)

---

## License

This project is licensed by MIT license