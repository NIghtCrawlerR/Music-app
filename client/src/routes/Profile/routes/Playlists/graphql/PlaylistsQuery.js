import gql from 'graphql-tag';

const QUERY = gql`
  query Playlists($userId: String!, $limit: Int) {
    playlists(userId: $userId, limit: $limit) {
      id
      title
      pictureMedium
      isLovedTrack
    }
  }
`;

export default QUERY;
