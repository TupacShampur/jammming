export async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  const res = await result.json();
  localStorage.setItem("userID", res.id);

  console.log(res);
  return res;
}
