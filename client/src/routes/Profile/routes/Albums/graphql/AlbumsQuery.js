import gql from 'graphql-tag';

const QUERY = gql`
  query Albums($userId: String!) {
    albums(userId: $userId) {
      id
      title
      coverMedium
    }
  }
`;

export default QUERY;
