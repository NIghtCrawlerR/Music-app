const { gql } = require('apollo-server-express');

const PlaylistType = gql`
  extend type Query {
    playlists(userId: String!): [Playlist]!
    playlistTracks(playlistId: String!): [Track]!
    loved(userId: String!): LovedTracks!
  } 

  type Playlist {
    id: ID!
    title: String!
    description: String!
    duration: Int!
    isLovedTrack: Boolean!
    public: Boolean!
    link: String!
    picture: String!
    pictureMedium: String!
    rating: Float
    tracksCount: Int
    share: String
  }

  type LovedTracks {
    data: [Track]!
    count: Int
  }
`;

module.exports = PlaylistType;
