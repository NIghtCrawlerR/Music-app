module.exports = {
  Query: {
    playlists: (_, args, { dataSources }) =>
      dataSources.deezerAPI.getUsersPlaylists(args),
  }
};
