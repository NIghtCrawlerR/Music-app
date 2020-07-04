import gql from 'graphql-tag';

const QUERY = gql`
  query PlaylistTracks($playlistId: String!) {
    playlistTracks(playlistId: $playlistId) {
      id
      title
    }
  }
`;

export default QUERY;
