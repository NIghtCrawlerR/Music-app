const { RESTDataSource } = require('apollo-datasource-rest');

class DeezerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.deezer.com/';
  }

  playlistReducer(playlist) {
    return {
      id: playlist.id,
      title: playlist.title,
      is_loved_track: playlist.is_loved_track,
      link: playlist.link,
      picture_medium: playlist.picture_medium,
      description: playlist.description,
      duration: playlist.duration,
      public: playlist.public,
      picture: playlist.picture,
      rating: playlist.rating,
      nb_tracks: playlist.nb_tracks,
      share: playlist.share,
    }
  }

  async getUsersPlaylists({ userId }) {
    const { data } = await this.get(`/user/${userId}/playlists`);

    return Array.isArray(data)
      ? data.map(playlist => this.playlistReducer(playlist))
      : [];
  }
}

module.exports = DeezerAPI;