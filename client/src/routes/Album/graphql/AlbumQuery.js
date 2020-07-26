import gql from 'graphql-tag';

const QUERY = gql`
  query Album($albumId: String!) {
    album(albumId: $albumId) {
      id
      title
      coverMedium
    }
  }
`;

export default QUERY;
