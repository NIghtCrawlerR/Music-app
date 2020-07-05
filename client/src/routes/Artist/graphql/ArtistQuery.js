import gql from 'graphql-tag';

const QUERY = gql`
  query Artist($artistId: String!) {
    artist(artistId: $artistId) {
      id
      name
      pictureMedium
    }
  }
`;

export default QUERY;
