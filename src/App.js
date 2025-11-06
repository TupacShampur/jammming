import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist, { accessPlaylist } from "./components/Playlist/Playlist";
import { startAuth, authorize } from "./components/accessToken/accessToken";
// import { fetchTrack } from "./components/accessTrack/accessTrack";
import { fetchProfile, userID } from "./components/accessProfile/accessProfile";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [searchResults, setSearchResults] = useState([]);
  const [tracklist, setTracklist] = useState([]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const handleAuth = async () => {
      await authorize();
      const newToken = localStorage.getItem("access_token");
      setToken(newToken);

      newToken && (await fetchProfile(newToken));
      const newUserID = localStorage.getItem("userID");
      setUserID(newUserID);
    };

    handleAuth();
  }, []);

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

  const savePlaylist = async () => {
    const trackUris = tracklist.map((track) => track.uri);
    // fetchProfile(token);
    await accessPlaylist(token, userID);

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
