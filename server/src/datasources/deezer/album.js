const albumReducer = (album) => {
  return {
    coverMedium: album.cover_medium,
    ...album,
  }
}

const trackReducer = (track) => {
  return {
    ...track,
  }
}

const GET_USER_ALBUMS = async ({ userId }, context) => {
  const { data } = await context.get(`/user/${userId}/albums`);

  return Array.isArray(data)
    ? data.map(album => albumReducer(album))
    : [];
}

const GET_ALBUM_TRACKS = async ({ albumId }, context) => {
  const { data } = await context.get(`/album/${albumId}/tracks`);

  return Array.isArray(data)
    ? data.map(track => trackReducer(track))
    : [];
}

module.exports = {
  GET_USER_ALBUMS,
  GET_ALBUM_TRACKS,
};