import gql from 'graphql-tag';

const QUERY = gql`
  query Artists($userId: String!, $limit: Int) {
    artists(userId: $userId, limit: $limit) {
      id
      name
      pictureMedium
    }
  }
`;

export default QUERY;
