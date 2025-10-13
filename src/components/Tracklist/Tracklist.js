import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ tracks, onAdd }) {
  return (
    <>
      <div className={styles.trackList}>
        {tracks.map((track) => (
          <Track key={track.id} track={track} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
}

export default Tracklist;
