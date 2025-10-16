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
      if (prev.some((t) => t.id === track.id)) return prev;
      return [...prev, track];
    });
  };

  const removeTrack = (track) => {
    setTracklist((prev) => {
      return prev.filter((t) => {
        return t.id !== track.id;
      });
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <div className="mainContent">
          <SearchResults
            tracks={mockTracks}
            onAdd={addTrack}
            isRemoval={false}
          />
          <Playlist
            tracks={tracklist}
            onRemove={removeTrack}
            isRemoval={true}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
