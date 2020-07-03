import gql from 'graphql-tag';

const QUERY = gql`
  query Playlists($userId: String!) {
    playlists(userId: $userId) {
      id
      title
      picture_medium
      is_loved_track
    }
  }
`;

export default QUERY;
