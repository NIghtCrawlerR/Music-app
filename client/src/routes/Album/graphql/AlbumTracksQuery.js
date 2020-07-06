import gql from 'graphql-tag';

const QUERY = gql`
  query AlbumTracks($albumId: String!) {
    albumTracks(albumId: $albumId) {
      id
      title
    }
  }
`;

export default QUERY;
