import React from "react";
import styles from "./SearchResults.module.css";
import Track from "../Track/Track";

function SearchResults({ tracks }) {
  return (
    <>
      <div className={styles.searchResults}>
        <h2>Results</h2>
        <div className={styles.trackList}>
          {tracks.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
