import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const mockTracks = [
    { id: 1, name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Song 3", artist: "Artist 3", album: "Album 3" },
  ];

  const [tracklist, setTracklist] = useState([]);

  const addTrack = (track) => {
    setTracklist((prev) => {
      if (prev.some((t) => t.id === track.id)) return [...prev, track];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults tracks={mockTracks} onAdd={addTrack} />
        <Playlist tracks={tracklist} onAdd={addTrack} />
        <p>ПЕНІС</p>
      </header>
    </div>
  );
}

export default App;
