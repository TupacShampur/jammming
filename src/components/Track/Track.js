import React from "react";
import styles from "./Track.module.css";

function Track({ track, onAdd, onRemove, isRemoval }) {
  return (
    <>
      <div key={track.id} className={styles.track}>
        <div className={styles.trackBox}>
          <h3>{track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        <button
          className={isRemoval ? styles.hidden : undefined}
          onClick={() => onAdd && onAdd(track)}
        >
          +
        </button>
        <button
          className={isRemoval ? undefined : styles.hidden}
          onClick={() => onRemove && onRemove(track)}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Track;
