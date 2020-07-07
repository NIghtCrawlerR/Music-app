import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import { USER_ID } from 'config';
import PlayList from 'components/PlayList';
import QUERY from './graphql/PlaylistsQuery';

const Playlists = () => {
  const playlistsQuery = useQuery(QUERY, {
    variables: {
      userId: USER_ID,
    },
  });

  const playlists = get(playlistsQuery, 'data.playlists', []);

  return (<PlayList playlists={playlists} />);
};

export default Playlists;
