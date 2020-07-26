const { trackReducer, albumReducer } = require('./reducers');
const album = require('./album');

const artistReducer = (artist) => {
  return {
    pictureMedium: artist.picture_medium,
    ...artist,
  }
}

const GET_USER_ARTISTS = async ({ userId, limit }, context) => {
  const limitParam = limit ? `?limit=${limit}` : '';
  const { data } = await context.get(`/user/${userId}/artists${limitParam}`);

  return Array.isArray(data)
    ? data.map(artist => artistReducer(artist))
    : [];
}

const GET_ARTIST = async ({ artistId }, context) => {
  const response = await context.get(`/artist/${artistId}`);

  return response ? artistReducer(response) : {};
}

const GET_TOP_TRACKS = async ({ artistId }, context) => {
  const { data } = await context.get(`/artist/${artistId}/top?limit=50`);

  return Array.isArray(data)
    ? data.map(artist => trackReducer(artist))
    : [];
}

const GET_ARTIST_ALBUMS = async ({ artistId }, context) => {
  const { data } = await context.get(`/artist/${artistId}/albums`);

  return Array.isArray(data)
    ? data.map(artist => albumReducer(artist))
    : [];
}

module.exports = {
  GET_USER_ARTISTS,
  GET_ARTIST,
  GET_TOP_TRACKS,
  GET_ARTIST_ALBUMS,
};
