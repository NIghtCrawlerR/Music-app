const { gql } = require('apollo-server-express');

const TrackType = gql`
  type Track {
    id: ID!
    title: String!
    artist: Artist!
    album: Album
  }
`;

module.exports = TrackType;
