const artistReducer = (artist) => {
  return {
    pictureMedium: artist.picture_medium,
    ...artist,
  }
}

const GET_USER_ARTISTS = async ({ userId }, context) => {
  const { data } = await context.get(`/user/${userId}/artists`);

  return Array.isArray(data)
    ? data.map(artist => artistReducer(artist))
    : [];
}

const GET_ARTIST = async({ artistId }, context) => {
  const response = await context.get(`/artist/${artistId}`);

  return response ? artistReducer(response) : {};
}

module.exports = {
  GET_USER_ARTISTS,
  GET_ARTIST,
};
