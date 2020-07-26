import gql from 'graphql-tag';

const QUERY = gql`
  query LovedTracks($userId: String!) {
    loved(userId: $userId) {
      count
      data {
        id
        title
        artist {
          id
          name
        }
        album {
          id
          title
        }
      }
    }
  }
`;

export default QUERY;
