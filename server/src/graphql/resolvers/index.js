module.exports = {
  Query: {
    playlists: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getUsersPlaylists(args),

    playlistTracks: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getPlaylistTracks(args),
  }
};
