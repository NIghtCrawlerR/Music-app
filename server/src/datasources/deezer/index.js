const { RESTDataSource } = require('apollo-datasource-rest');

const { GET_USERS_PLAYLIST, GET_PLAYLIST_TRACKS } = require('./playlist');
const { GET_USER_ARTISTS, GET_ARTIST } = require('./artist');

class DeezerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.deezer.com/';
  }

  async getUsersPlaylists(args) {
    return await GET_USERS_PLAYLIST(args, this);
  }

  async getPlaylistTracks(args) {
    return await GET_PLAYLIST_TRACKS(args, this);
  }

  async getUsersArtists(args) {
    return await GET_USER_ARTISTS(args, this);
  }

  async getArtist(args) {
    return await GET_ARTIST(args, this);
  }
}

module.exports = DeezerAPI;