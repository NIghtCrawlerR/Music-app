const { gql } = require('apollo-server-express');

const AlbumType = gql`
  extend type Query {
    albums(userId: String!): [Album]!
    albumTracks(albumId: String!): [Track]!
  }

  type Album {
    id: ID!
    title: String!
    coverMedium: String!
  }
`;

module.exports = AlbumType;