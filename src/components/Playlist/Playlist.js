import React, { useState } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ tracks, onAdd }) {
  return (
    <>
      <div className={styles.playlist}>
        <h2>Playlist</h2>
        <Tracklist tracks={tracks} onAdd={onAdd} />
      </div>
    </>
  );
}

export default Playlist;
