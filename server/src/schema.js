const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    playlists(userId: String!): [Playlist]!
  }

  type Playlist {
    id: ID!
    title: String!
    description: String!
    duration: Float!
    is_loved_track: Boolean!
    public: Boolean!
    link: String!
    picture: String!
    picture_medium: String!
    rating: Float
    nb_tracks: Int
    share: String
  }
`;

module.exports = typeDefs;