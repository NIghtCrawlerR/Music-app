import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';

import PropTypes from 'utils/propTypes';
import PlayList from 'components/PlayList';
import { Heading1 } from 'styledComponents';
import QUERY from './graphql/PlaylistsQuery';

const Playlists = ({ match: { params: { userId } } }) => {
  const playlistsQuery = useQuery(QUERY, {
    variables: {
      userId,
    },
    skip: !userId,
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

Playlists.propTypes = {
  match: PropTypes.match.isRequired,
};

export default Playlists;
