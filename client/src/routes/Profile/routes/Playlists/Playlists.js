import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import { USER_ID } from 'config';
import PlayList from 'components/PlayList';
import QUERY from './graphql/PlaylistsQuery';

import { Heading1 } from 'styledComponents';

const Playlists = () => {
  const playlistsQuery = useQuery(QUERY, {
    variables: {
      userId: USER_ID,
    },
  });

  const allPlaylists = get(playlistsQuery, 'data.playlists', []);
  const playlists = allPlaylists.filter(({ isLovedTrack }) => !isLovedTrack);

  return (
    <>
      <Heading1>{`${playlists.length} playlists`}</Heading1>
      <PlayList playlists={playlists} />
    </>
  );
};

export default Playlists;
