import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`Search for: ${search}`);
  };

  return (
    <>
      <div className={styles.searchBar}>
        <input
          className={styles.input}
          value={search}
          type="text"
          onChange={handleChange}
          placeholder="Enter song name..."
        ></input>
        <button className={styles.button} onClick={handleSubmit}>
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
