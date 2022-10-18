// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();

// Your code here

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));

app.use(express.json());

function requireJSON() {
  return (req, res, next) => {
    if (req.headers["content-type"] !== "application/json") {
      res.status(400).send("Error: Request requires JSON format");
    } else {
      next();
    }
  };
}

app.post("/", requireJSON(), (req, res, next) => {
  let content = req.body;
  console.log(JSON.stringify(content));

  res.send("Recieved request");
  next();
});
