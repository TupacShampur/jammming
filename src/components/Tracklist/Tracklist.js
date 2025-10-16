import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <>
      <div className={styles.trackList}>
        {tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
}

export default Tracklist;
