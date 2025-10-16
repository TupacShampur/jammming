import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults({ tracks, onAdd, isRemoval }) {
  return (
    <>
      <div className={styles.searchResults}>
        <h2>Results</h2>
        <Tracklist tracks={tracks} onAdd={onAdd} isRemoval={isRemoval} />
      </div>
    </>
  );
}

export default SearchResults;
