module.exports = {
  Query: {
    playlists: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getUsersPlaylists(args),

    playlistTracks: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getPlaylistTracks(args),

    artists: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getUsersArtists(args),

    artist: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getArtist(args),
  }
};
