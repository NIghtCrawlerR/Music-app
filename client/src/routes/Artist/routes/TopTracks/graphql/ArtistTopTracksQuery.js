import gql from 'graphql-tag';

const QUERY = gql`
  query ArtistTopTracks($artistId: String!) {
    artistTopTracks(artistId: $artistId) {
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
`;

export default QUERY;
