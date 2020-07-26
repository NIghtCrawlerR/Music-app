import gql from 'graphql-tag';

const QUERY = gql`
  query AlbumTracks($albumId: String!) {
    albumTracks(albumId: $albumId) {
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
