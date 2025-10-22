// import React, { useState } from "react";

// const [token, setToken] = useState("");
console.log("AUTH MODULE LOADED");

// let token = "";

const generateRandomString = (n) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + n);

export const authorize = () => {
  const client_id = "6a35cc5c249542dcb9a4095ccbcd0dab";
  const redirect_uri = "http://127.0.0.1:3000/";

  const state = generateRandomString(16);
  const stateKey = "spotify_auth_state";

  localStorage.setItem(stateKey, state);
  const scope = "playlist-modify-public";

  const code_challenge_method = S256;

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=code";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&code_challenge_method=" + encodeURIComponent(code_challenge_method);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&state=" + encodeURIComponent(state);

  console.log(url);
  window.location = url;
};
