const { gql } = require('apollo-server-express');

const TrackType = gql`
  extend type Query {
    playlistTracks(playlistId: String!): [Track]!
  } 

  type Track {
    id: ID!
    title: String!
  }
`;

module.exports = PlaylistType;
