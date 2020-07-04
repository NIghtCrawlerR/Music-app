import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import { USER_ID } from 'config';
import PlaylistItem from 'components/PlaylistItem';
import QUERY from './graphql/PlaylistsQuery';

const Playlists = () => {
  const playlistsQuery = useQuery(QUERY, {
    variables: {
      userId: USER_ID,
    },
  });

  const playlists = get(playlistsQuery, 'data.playlists', []);

  return (
    <div>
      {playlists.map((playlist) => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default Playlists;
