const { RESTDataSource } = require('apollo-datasource-rest');

class DeezerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.deezer.com/';
  }

  playlistReducer(playlist) {
    return {
      isLovedTrack: playlist.is_loved_track,
      pictureMedium: playlist.picture_medium,
      tracksCount: playlist.nb_tracks,
      ...playlist,
    }
  }

  trackReducer(track) {
    return {
      ...track,
    }
  }

  async getUsersPlaylists({ userId }) {
    const { data } = await this.get(`/user/${userId}/playlists`);

    return Array.isArray(data)
      ? data.map(playlist => this.playlistReducer(playlist))
      : [];
  }

  async getPlaylistTracks({ playlistId }) {
    const { data } = await this.get(`/playlist/${playlistId}/tracks`);

    return Array.isArray(data)
      ? data.map(track => this.trackReducer(track))
      : [];
  }
}

module.exports = DeezerAPI;