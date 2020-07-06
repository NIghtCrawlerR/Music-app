import gql from 'graphql-tag';

const QUERY = gql`
  query ArtistAlbums($artistId: String!) {
    artistAlbums(artistId: $artistId) {
      id
      title
      coverMedium
    }
  }
`;

export default QUERY;
