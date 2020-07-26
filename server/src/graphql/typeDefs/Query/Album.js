const { gql } = require('apollo-server-express');

const AlbumType = gql`
  extend type Query {
    albums(userId: String!): [Album]!
    album(albumId: String!): Album!
    albumTracks(albumId: String!): [Track]!
  }

  type Album {
    id: ID!
    title: String!
    coverMedium: String!
    artist: Artist!
  }
`;

module.exports = AlbumType;
