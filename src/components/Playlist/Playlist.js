import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, onRemove, isRemoval }) {
  return (
    <>
      <div className={styles.playlist}>
        <input
          className={styles.playlistTitleInput}
          placeholder="Edit playlist name..."
        ></input>
        <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={isRemoval} />
      </div>
    </>
  );
}

export default Playlist;
