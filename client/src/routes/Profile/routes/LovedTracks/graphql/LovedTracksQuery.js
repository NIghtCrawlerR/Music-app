import gql from 'graphql-tag';

const QUERY = gql`
  query LovedTracks($userId: String!) {
    loved(userId: $userId) {
      count
      data {
        id
        title
      }
    }
  }
`;

export default QUERY;
