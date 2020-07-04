import gql from 'graphql-tag';

const QUERY = gql`
  query Playlists($userId: String!) {
    playlists(userId: $userId) {
      id
      title
      pictureMedium
      isLovedTrack
    }
  }
`;

export default QUERY;
