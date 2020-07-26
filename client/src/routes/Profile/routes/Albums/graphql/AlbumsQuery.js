import gql from 'graphql-tag';

const QUERY = gql`
  query Albums($userId: String!, $limit: Int) {
    albums(userId: $userId, limit: $limit) {
      id
      title
      coverMedium
      artist {
        id
        name
      }
    }
  }
`;

export default QUERY;
