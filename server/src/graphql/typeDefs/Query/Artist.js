const { gql } = require('apollo-server-express');

const ArtistType = gql`
  extend type Query {
    artists(userId: String!): [Artist]!
    artist(artistId: String!): Artist!
    artistTopTracks(artistId: String!): [Track]!
    artistAlbums(artistId: String!): [Album]!
  }

  type Artist {
    id: ID!
    name: String!
    pictureMedium: String!
    tracklist: String!
  }
`;

module.exports = ArtistType;
