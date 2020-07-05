import gql from 'graphql-tag';

const QUERY = gql`
  query Artists($userId: String!) {
    artists(userId: $userId) {
      id
      name
      pictureMedium
    }
  }
`;

export default QUERY;
