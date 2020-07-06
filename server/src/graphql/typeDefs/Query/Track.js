const { gql } = require('apollo-server-express');

const TrackType = gql`
  type Track {
    id: ID!
    title: String!
  }
`;

module.exports = TrackType;
