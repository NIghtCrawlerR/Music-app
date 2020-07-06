const albumReducer = (album) => {
  return {
    coverMedium: album.cover_medium,
    ...album,
  }
}

module.exports = albumReducer;
