import gql from 'graphql-tag';

const QUERY = gql`
  query Playlists($userId: String!) {
    playlists(userId: $userId) {
      id
      title
      link
      picture
      is_loved_track
    }
  }
`;

export default QUERY;
