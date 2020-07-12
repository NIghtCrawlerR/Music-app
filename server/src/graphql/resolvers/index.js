module.exports = {
  Query: {
    playlists: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getUsersPlaylists(args),

    playlistTracks: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getPlaylistTracks(args),

    loved: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getLovedTracks(args),

    artists: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getUsersArtists(args),

    artist: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getArtist(args),

    artistTopTracks: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getArtistTopTracks(args),

    artistAlbums: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getArtistAlbums(args),

    albums: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getUsersAlbums(args),

    albumTracks: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getAlbumTracks(args),
  }
};
