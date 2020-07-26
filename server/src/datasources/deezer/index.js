const { RESTDataSource } = require('apollo-datasource-rest');

const { GET_USERS_PLAYLIST, GET_PLAYLIST_TRACKS, GET_LOVED_TRACKS } = require('./playlist');
const { GET_USER_ARTISTS, GET_ARTIST, GET_TOP_TRACKS, GET_ARTIST_ALBUMS } = require('./artist');
const { GET_USER_ALBUMS, GET_ALBUM, GET_ALBUM_TRACKS } = require('./album');

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

  async getLovedTracks(args) {
    return await GET_LOVED_TRACKS(args, this);
  }

  async getUsersArtists(args) {
    return await GET_USER_ARTISTS(args, this);
  }

  async getArtist(args) {
    return await GET_ARTIST(args, this);
  }

  async getArtistTopTracks(args) {
    return await GET_TOP_TRACKS(args, this);
  }

  async getArtistAlbums(args) {
    return await GET_ARTIST_ALBUMS(args, this);
  }

  async getUsersAlbums(args) {
    return await GET_USER_ALBUMS(args, this);
  }

  async getAlbum(args) {
    return await GET_ALBUM(args, this);
  } 

  async getAlbumTracks(args) {
    return await GET_ALBUM_TRACKS(args, this);
  }
}

module.exports = DeezerAPI;