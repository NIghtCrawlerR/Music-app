const { trackReducer } = require('./reducers');

const playlistReducer = (playlist) => {
  return {
    isLovedTrack: playlist.is_loved_track,
    pictureMedium: playlist.picture_medium,
    tracksCount: playlist.nb_tracks,
    ...playlist,
  }
}

const GET_USERS_PLAYLIST = async ({ userId }, context) => {
  const { data } = await context.get(`/user/${userId}/playlists`);

  return Array.isArray(data)
    ? data.map(playlist => playlistReducer(playlist))
    : [];
}

const GET_PLAYLIST_TRACKS = async ({ playlistId }, context) => {
  const { data } = await context.get(`/playlist/${playlistId}/tracks`);

  return Array.isArray(data)
    ? data.map(track => trackReducer(track))
    : [];
}

const GET_LOVED_TRACKS = async ({ userId }, context) => {
  const { data } = await context.get(`/user/${userId}/playlists`);

  const lovedTracks = data.find(playlist => playlist.is_loved_track);
  const count = lovedTracks.nb_tracks;

  const playlistId = lovedTracks.id;

  return {
    data: GET_PLAYLIST_TRACKS({ playlistId }, context),
    count,
  };
}

module.exports = {
  GET_USERS_PLAYLIST,
  GET_PLAYLIST_TRACKS,
  GET_LOVED_TRACKS,
}