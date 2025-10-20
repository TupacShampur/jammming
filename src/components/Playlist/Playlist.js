import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, onRemove, isRemoval, onSave }) {
  return (
    <>
      <div className={styles.playlist}>
        <input
          className={styles.playlistTitleInput}
          placeholder="Edit playlist name..."
        ></input>
        <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={isRemoval} />
        <button
          className={styles.saveButton}
          onClick={() => onSave && onSave()}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Playlist;
