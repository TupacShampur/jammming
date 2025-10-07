import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  const mockTracks = [
    { id: 1, name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Song 3", artist: "Artist 3", album: "Album 3" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <SearchResults tracks={mockTracks} />
        <p>ПЕНІС</p>
      </header>
    </div>
  );
}

export default App;
