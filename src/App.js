import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import {
  startAuth,
  authorize,
  token,
} from "./components/accessToken/accessToken";
import { fetchTrack } from "./components/accessTrack/accessTrack";
// import { fetchProfile } from "./components/accessProfile/accessProfile";

function App() {
  useEffect(() => {
    authorize();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchProfile(token);
  //     console.log(data);
  //   })();
  // }, []);

  const [searchResults, setSearchResults] = useState([]);
  const [tracklist, setTracklist] = useState([]);

  const handleSearch = (tracks) => {
    setSearchResults(tracks);
  };

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

  const savePlaylist = () => {
    const trackUris = tracklist.map((track) => track.uri);
    console.log(trackUris);

    setTracklist([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar token={token} onSearch={handleSearch} />
        <button onClick={startAuth}>Log in with Spotify</button>
        <div className="mainContent">
          <SearchResults
            tracks={searchResults}
            onAdd={addTrack}
            isRemoval={false}
          />
          <Playlist
            tracks={tracklist}
            onRemove={removeTrack}
            isRemoval={true}
            onSave={savePlaylist}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
