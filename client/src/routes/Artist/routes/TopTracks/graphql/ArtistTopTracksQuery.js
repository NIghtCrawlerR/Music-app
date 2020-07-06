import gql from 'graphql-tag';

const QUERY = gql`
  query ArtistTopTracks($artistId: String!) {
    artistTopTracks(artistId: $artistId) {
      id
      title
    }
  }
`;

export default QUERY;
